'use strict';


// LOAD MODULES
//
// const Joi = require('@hapi/joi');


// SERVER INTERNALS
//
const schemas = require('../../../configs/schemas');




module.exports = [

  {
    method: 'GET',
    path: '/cron/{jobs}',
    options: {
      description: 'Cron Jobs',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session',
        scope: ['root']
      },
      plugins: {
        'hapi-auth-cookie': { redirectTo: false }
      },
      pre: [],
      cache: {},

      validate: {
        params: schemas.schemas.jobs
      },

      handler: require('../../handlers/cron/index')
    }
  }

];
