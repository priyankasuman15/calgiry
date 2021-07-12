'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');
const MongoHelpers = require('../../controllers/mongodb');
const NodeMailerHelper = require('../../controllers/nodemailer');


// SERVER INTERNALS
//
const events = require('../../data/events');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'events-post',
      context: h.context
    }
  };

  return h.view('events-post', data);
}




function isEventEligible(request, user) {

  let event;
  for (let i = 0; i < events.length; ++i) {
    if (request.payload.id === events[i].id) {
      event = events[i];
    }
  }

  // event registration is denied if
  // event is not active || event format is 'inv' || event is in past
  if (event.active === 'n' || event.format.type === 'inv' || event.start < request.server.methods.dateToIsoDate()) {
    return Boom.badRequest('ineligible event registration');
  }

  let cfc = true;
  let ccc = true;

  if (user.data.cfc.expiry < event.end || user.data.cfc.expiry === '') {
    cfc = false;
  }

  if (user.data.ccc.expiry < event.end || user.data.ccc.expiry === '') {
    ccc = false;
  }


  const object = {
    event,
    cfc,
    ccc
  };

  return object;
}




async function registerEvent(request, h, user) {

  try {
    const db = request.getMongo();
    const id = request.payload.id;
    const email = user.personal.contact.email;

    // compare event id to record.data.transactions.events array
    // only update if not already registered
    if (user.data.transactions.events.includes(id) === false) {
      await db.collection('members').updateOne({ 'personal.contact.email': email },
        { $addToSet: { 'data.transactions.events': { $each: [id] } } });

      return true;
    }

    return false;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}




async function handler(request, h) {

  // POST

  try {
    // if user is already authenticated...
    if (request.auth.isAuthenticated && request.auth.isAuthorized) {
      const session = request.auth.credentials;

      // retrieve user object
      const user = await MongoHelpers.getMember(request, { _id: session._id });

      if (user.isBoom) {
        return handleError(request, h, user);
      }


      // is event eligible for registration
      const isEligible = isEventEligible(request, user);

      if (isEligible.isBoom) {
        return handleError(request, h, isEligible);
      }


      // do not send confirmation email if it is a duplicate
      const isRegistered = await registerEvent(request, h, user);

      if (isRegistered === true) {
        user.options = isEligible;
        NodeMailerHelper.sendMail(request, user);
      }

      const data = {
        $global: {
          user: session,
          isRegistered,
          payload: request.payload,
          page: 'events-post',
          context: h.context
        }
      };

      request.log(['info', 'session'], `/events ${user.personal.contact.email}`);

      return h.view('events-post', data);
    }

    const error = Boom.unauthorized('unauthorized request');

    return handleError(request, h, error);
  }

  catch (error) {
    return Boom.badImplementation('registration error', error);
  }
}


module.exports = handler;
