'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
const Bcrypt = require('bcryptjs');
const MongoHelpers = require('../../controllers/mongodb');


// SERVER INTERNALS
//




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'login',
      context: h.context
    }
  };

  return h.view('login', data);
}




function checkPassword(request, user) {

  if (request.payload.email === user.personal.contact.email && Bcrypt.compareSync(request.payload.password, user.password)) {
    return true;
  }

  return false;
}




function trimUser(user) {

  // delete user.id;
  delete user.password;
  // delete user.personal.name;
  // delete user.personal.dob;
  // delete user.personal.sex;
  // delete user.personal.contact.address;
  // delete user.personal.contact.city;
  // delete user.personal.contact.province;
  // delete user.personal.contact.postal_code;
  // delete user.personal.contact.country;
  // delete user.personal.contact.phone;
  // delete user.data;

  return user;
}




async function handler(request, h) {

  // POST

  try {

    // retrieve user object
    let user = await MongoHelpers.getMember(request, { email: request.payload.email });

    if (user.isBoom) {
      return handleError(request, h, user);
    }
    const checked = checkPassword(request, user);

    if (checked === true) {
      // remove password before user object is sent
      user = trimUser(user);

      // set login session
      console.log('here');
      request.cookieAuth.set(user);
      const next = request.query.next ? request.query.next : '/user';

      request.log(['info', 'session'], `/login ${user.personal.contact.email}`);

      return h.redirect(next);
    }

    const error = Boom.unauthorized('invalid user or password');
    return handleError(request, h, error);
  }


  catch (error) {

    return Boom.badImplementation('mongodb error', error);
  }
}


module.exports = handler;
