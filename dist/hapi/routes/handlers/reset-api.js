'use strict';


// LOAD MODULES
//
const Bcrypt = require('bcryptjs');
const Boom = require('@hapi/boom');
const NodeMailerHelper = require('../../controllers/nodemailer');


// SERVER INTERNALS
//
const Member = require('../../models/member');




function handleError(request, h, error) {

  const data = {
    $global: {
      token: request.query.t,
      error,
      page: 'reset-api',
      context: h.context
    }
  };

  return h.view('reset-api', data);
}




async function updateDocument(request, h, result) {

  try {
    const db = request.getMongo();

    const email = result.email;
    const password = request.payload.password;
    const timestamp = parseInt(result.timestamp, 10);
    const token = result.token;

    const NUM_SALT_ROUNDS = 12;
    const MS_MINUTE = 1000 * 60;
    const difference = Math.floor((Date.now() - timestamp) / MS_MINUTE);

    // compare timestamp of token with Date.now()
    if (difference <= 60) {
      // update member record
      await db.collection('members').updateOne(
        { 'personal.contact.email': email },
        {
          $set: {
            'password': Bcrypt.hashSync(password, NUM_SALT_ROUNDS)
          }
        }
      );

      // remove used token
      await db.collection('tokens').deleteOne(
        { token }
      );

      return difference;
    }

    // remove expired token
    await db.collection('tokens').remove(
      { token }
    );

    return false;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}




async function searchToken(request, h) {

  try {
    const db = request.getMongo();

    const token = request.query.t || request.payload.token;

    const cursor = db.collection('tokens').find({
      token
    }, {
      '_id': 0
    }).limit(1);

    const count = await cursor.count();
    const record = await cursor.next();

    // no matching document(s) found
    if (count !== 1) {
      return false;
    }

    // success, matching document(s) found
    if (count === 1) {
      return record;
    }
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}




async function handler(request, h) {

  try {

    // GET
    //
    if (request.method === 'get') {

      // no reset token, redirect to /reset
      if (request.query.t === undefined) {
        return h.redirect('/reset');
      }

      // check if token exists
      const token = await searchToken(request, h);

      if (token === false) {
        const error = Boom.badData('mongodb error: token does not exist');
        return handleError(request, h, error);
      }

      const data = {
        $global: {
          method: request.method,
          token: request.query.t,
          ip: request.info.remoteAddress,
          page: 'reset-api',
          context: h.context
        }
      };

      return h.view('reset-api', data);
    }


    // POST
    //
    if (request.method === 'post') {

      // check if token exists
      const token = await searchToken(request, h);
      if (token === false) {
        const error = Boom.badImplementation('mongodb error: failed to update user');
        return handleError(request, h, error);
      }

      // check if token is valid and update mongodb
      const valid = await updateDocument(request, h, token);
      if (valid === false) {
        const error = Boom.badImplementation('mongodb error: expired or invalid token');
        return handleError(request, h, error);
      }

      const user = new Member();
      user.personal.contact.email = token.email;
      user.options = token;

      NodeMailerHelper.sendMail(request, user);

      return h.redirect('/login');
    }
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}


module.exports = handler;
