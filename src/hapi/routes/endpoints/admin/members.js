'use strict';


// LOAD MODULES
//


// SERVER INTERNALS
//
const schemas = require('../../../configs/schemas');




module.exports = [

  {
    method: ['GET', 'POST'],
    path: '/admin-members',
    options: {
      description: 'Admin Members GET/POST',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session',
        scope: ['admin', 'root']
      },
      plugins: {
        'hapi-auth-cookie': { redirectTo: false }
      },
      pre: [],
      cache: {},

      validate: {
        query: schemas.schemas.bson
      },

      handler: require('../../handlers/admin/members')
    }
  }

];
