// 'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');

const printICS = require('./ics');
const exportMembers = require('./export');
const importMembers = require('./import');
const updateCFC = require('./cfc');
const updateFIDE = require('./fide');


// SERVER INTERNALS
//
const events = require('../../../data/events');




function handleError(request, h, error) {

  const data = {
    $global: {
      error,
      page: 'cron',
      context: h.context
    }
  };

  return h.view('cron', data);
}




async function handler(request, h) {

  try {

    // if user is already authenticated...
    let session = null;
    if (request.auth.isAuthenticated && request.auth.isAuthorized && request.auth.credentials.scope.includes('root')) {
      session = request.auth.credentials;

      let success;

      // ./ics.js
      if (request.params.jobs === 'ics') {
        success = await printICS(request, events);
      }

      // ./cfc.js
      if (request.params.jobs === 'cfc') {
        success = await updateCFC(request);
      }

      // ./fide.js
      if (request.params.jobs === 'fide') {
        success = await updateFIDE(request);
      }

      // ./export.js
      if (request.params.jobs === 'export') {
        success = await exportMembers(request);
      }

      // ./import.js
      if (request.params.jobs === 'import') {
        success = await importMembers(request);
      }

      // if (success.isBoom) {
      //   return handleError(request, h, success);
      // }

      // const data = {
      //   $global: {
      //     user: session,
      //     page: 'cron',
      //     context: h.context
      //   }
      // };

      const next = request.query.next ? request.query.next : '/';
      return h.redirect(next);
    }

    // return handleError(request, h, Boom.unauthorized('unauthorized request'));
    const next = request.query.next ? request.query.next : '/login';
    return h.redirect(next);
  }


  catch (error) {

    return Boom.badImplementation('cron error', error);
  }
}


module.exports = handler;
