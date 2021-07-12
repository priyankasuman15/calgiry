'use strict';


// LOAD MODULES
//


// SERVER INTERNALS
//
const schemas = require('../../configs/schemas');




module.exports = [

  {
    method: 'POST',
    path: '/events-post',
    options: {
      description: 'Event Registration',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session',
        scope: ['user', 'admin']
      },
      plugins: {},
      pre: [],
      cache: {},

      validate: {
        payload: schemas.schemas.eventid
      },

      handler: require('../handlers/events')
    }
  }

];
