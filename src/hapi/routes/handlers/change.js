'use strict';


// LOAD MODULES
//
const Bcrypt = require('bcryptjs');
const Boom = require('@hapi/boom');
const MongoHelpers = require('../../controllers/mongodb');
const NodeMailerHelper = require('../../controllers/nodemailer');


// SERVER INTERNALS
//
// const Member = require('../../models/member');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'change',
      context: h.context
    }
  };

  return h.view('change', data);
}




async function setUser(request, h, user) {

  try {
    const pw = request.payload.pw;

    const NUM_SALT_ROUNDS = 12;

    user.password = Bcrypt.hashSync(pw, NUM_SALT_ROUNDS);

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
      session = request.auth.credentials;

      // retrieve user object
      let user = await MongoHelpers.getMember(request, { _id: session._id });

      if (user.isBoom) {
        return handleError(request, h, user);
      }

      user = await setUser(request, h, user);

      const result = await MongoHelpers.updateMember(request, user);

      if (result.isBoom) {
        return handleError(request, h, result);
      }

      // const data = {
      //   $global: {
      //     user,
      //     page: 'change',
      //     context: h.context
      //   }
      // };

      NodeMailerHelper.sendMail(request, user);

      request.log(['info', 'session'], `/change ${user.personal.contact.email}`);

      return h.redirect('/logout');
    }

    return Boom.unauthorized('unauthorized request');
  }


  catch (error) {

    return Boom.badImplementation('server error', error);
  }
}


module.exports = handler;
