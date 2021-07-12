'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');


// SERVER INTERNALS
//
const events = require('../../data/events');
// const events = require('../../../assets/json/events.json');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'events',
      context: h.context
    }
  };

  return h.view('events', data);
}




async function searchStartlist(request, h) {

  // GET

  try {
    const db = request.getMongo();

    const startlist = {};

    for (let i = 0; i < events.length; ++i) {
      const cursor = await db.collection('members').find({
        'data.transactions.events': events[i].id
      }).collation({
        locale: 'en',
        numericOrdering: true
      }).project({
        '_id': 0,
        'personal.name.last': 1,
        'personal.name.first': 1,
        'data.cfc.elo.classical': 1,
        'data.fide.elo.classical': 1
      }).sort({ 'data.cfc.elo.classical': -1 }).toArray();

      startlist[events[i].id] = cursor;
    }

    return startlist;
  }

  catch (error) {
    return Boom.badImplementation('mongodb error', error);
  }
}




async function handler(request, h) {

  // GET

  try {
    // if user is already authenticated...
    let session = null;
    if (request.auth.isAuthenticated) {
      session = request.auth.credentials;
    }

    // retrieve event entries
    const startlist = await searchStartlist(request, h);

    if (startlist.isBoom) {
      return handleError(request, h, startlist);
    }

    const data = {
      $global: {
        user: session,
        eventlist: events,
        startlist,
        page: 'events',
        context: h.context
      }
    };

    return h.view('events', data);
  }

  catch (error) {
    return Boom.badImplementation('events error', error);
  }
}


module.exports = handler;
