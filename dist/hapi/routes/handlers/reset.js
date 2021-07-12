'use strict';


// LOAD MODULES
//
const Bcrypt = require('bcryptjs');
const Boom = require('@hapi/boom');
const MongoHelpers = require('../../controllers/mongodb');
const NodeMailerHelper = require('../../controllers/nodemailer');


// SERVER INTERNALS
//




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'reset',
      context: h.context
    }
  };

  return h.view('reset', data);
}




async function cleanTokens(request, h) {

  try {
    const db = request.getMongo();

    const email = request.payload.email;
    const ip = request.info.remoteAddress;

    // remove from mongodb
    const result = await db.collection('tokens').remove(
      { $or: [{ email }, { ip }] }
    );

    // return result.result.n;
    return result;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error: failed to clean reset token', error);
  }
}




async function insertToken(request, h, token) {

  try {
    const db = request.getMongo();

    const record = {
      email: request.payload.email,
      ip: request.info.remoteAddress,
      timestamp: (Date.now()).toString(),
      token
    };

    // insert into mongodb
    const result = await db.collection('tokens').insertOne(record);

    return result;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error: failed to insert reset token', error);
  }
}




async function generateToken(request, h) {

  const NUM_SALT_ROUNDS = 12;

  const email = request.payload.email;
  const token = await Bcrypt.hashSync(email, NUM_SALT_ROUNDS);

  return token;
}




async function handler(request, h) {

  // POST

  try {

    // retrieve user object
    const user = await MongoHelpers.getMember(request, { email: request.payload.email });

    if (user.isBoom) {
      return handleError(request, h, user);
    }

    const cleaned = await cleanTokens(request, h);

    if (cleaned.isBoom) {
      // const error = Boom.badImplementation('mongodb error: failed to clean reset token');
      return handleError(request, h, cleaned);
    }

    const token = await generateToken(request, h);

    const result = await insertToken(request, h, token);

    if (result.isBoom || result.insertedCount !== 1) {
      // const error = Boom.badImplementation('mongodb error: failed to insert reset token');
      return handleError(request, h, result);
    }

    user.options = { token };
    NodeMailerHelper.sendMail(request, user);


    const data = {
      $global: {
        method: request.method,
        email: request.payload.email,
        ip: request.info.remoteAddress,
        page: 'reset',
        context: h.context
      }
    };

    request.log(['info', 'session'], `/reset ${user.personal.contact.email}`);

    return h.view('reset', data);
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}


module.exports = handler;
