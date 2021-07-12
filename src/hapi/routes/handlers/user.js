'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
const MongoHelpers = require('../../controllers/mongodb');


// SERVER INTERNALS
//
// const Member = require('../../models/member');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'user',
      context: h.context
    }
  };

  return h.view('register', data);
}




async function setUser(request, h, user) {

  try {
    const name = request.payload.name.trim().replace(/\s+/g, ' ');
    const dob = request.payload.dob;
    const sex = request.payload.sex;
    const phone = request.payload.phone.replace(/[ ()\-]/, '.');
    // const email = request.payload.email.trim().toLowerCase();
    const address = request.payload.address.trim();
    const city = request.payload.city.trim();
    const province = request.payload.province.trim().toUpperCase();
    const postal_code = request.payload.postal_code.trim().toUpperCase();
    const country = request.payload.country.trim().toUpperCase();
    const cfc = request.payload.cfc.trim();

    const both = name.split(', ');
    const last = both[0];
    const first = both[1] || '';

    // user.id = request.server.methods.makeHashCode(email).toString();
    user.personal.name.last = last;
    user.personal.name.first = first;
    user.personal.dob = dob;
    user.personal.sex = sex;
    user.personal.contact.phone = phone;
    // user.personal.contact.email = email;
    user.personal.contact.address = address;
    user.personal.contact.city = city;
    user.personal.contact.province = province;
    user.personal.contact.postal_code = postal_code;
    user.personal.contact.country = country;
    user.data.cfc.id = cfc;

    return await user;
  }

  catch (error) {
    return Boom.badData('user processing', error);
  }
}




async function handler(request, h) {

  // POST

  try {

    // if user is already authenticated...
    let session = null;
    if (request.auth.isAuthenticated && request.auth.isAuthorized) {
      console.log('Test_Error ssffffasf');
      debugger;
       console.log('session');
      session = request.auth.credentials;
console.log(session);
      // retrieve user object
      let user = await MongoHelpers.getMember(request, { _id: session._id });

      if (user.isBoom) {
       
        return handleError(request, h, user);
      }

      user = await setUser(request, h, user);
console.log('user');
    console.log(user);
      const result = await MongoHelpers.updateMember(request, user);
  
      if (result.isBoom) {
        return handleError(request, h, result);
      }

      const data = {
        $global: {
          user,
          page: 'user',
          context: h.context
        }
      };

      request.log(['info', 'session'], `/user ${user.personal.contact.email}`);

      return h.view('user', data);
    }
console.log('Test_Error');
    return Boom.unauthorized('unauthorized request');
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }
}


module.exports = handler;
