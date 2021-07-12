'use strict';


// LOAD MODULES
//


// SERVER INTERNALS
//
const schemas = require('../../configs/schemas');




module.exports = [

  {
    method: 'POST',
    path: '/user',
    options: {
      description: 'User Post',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session',
        scope: ['user', 'admin']
      },
      plugins: {
        'hapi-auth-cookie': { redirectTo: false }
      },
      pre: [],
      cache: {},

      validate: {
        payload: schemas.schemas.user
      },

      handler: require('../handlers/user')
    }
  }

];
