'use strict';


// LOAD MODULES
//


// SERVER INTERNALS
//
const schemas = require('../../configs/schemas');




module.exports = [

  {
    method: 'POST',
    path: '/change',
    options: {
      description: 'Change Password Post',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session',
        scope: ['user', 'admin']
      },
      plugins: {
        'hapi-auth-cookie': { redirectTo: false },
        'hapi-rate-limit': { pathLimit: 8, pathCache: { expiresIn: 640000 } }
      },
      pre: [],
      cache: {},

      validate: {
        payload: schemas.schemas.change
      },

      handler: require('../handlers/change')
    }
  }

];
