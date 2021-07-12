'use strict';


// LOAD MODULES
//


// SERVER INTERNALS
//
const schemas = require('../../configs/schemas');




module.exports = [

  {
    method: ['GET', 'POST'],
    path: '/reset-api',
    options: {
      description: 'Reset Password API Token Get/Post',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': { redirectTo: false },
        'hapi-rate-limit': { pathLimit: 8, pathCache: { expiresIn: 640000 } }
      },
      pre: [],
      cache: {},

      validate: {
        query: schemas.schemas.token
      },

      handler: require('../handlers/reset-api')
    }
  }

];
