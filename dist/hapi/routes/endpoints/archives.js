'use strict';


// LOAD MODULES
//


// SERVER INTERNALS
//
const schemas = require('../../configs/schemas');




module.exports = [

  {
    method: 'GET',
    path: '/archives',
    options: {
      description: 'Archives',
      notes: [],
      tags: [],
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': { redirectTo: false }
      },
      pre: [],
      cache: {},

      validate: {
        query: schemas.schemas.archives
      },

      handler: function (request, h) {
        // if user is already authenticated...
        let session = null;
        if (request.auth.isAuthenticated) {
          session = request.auth.credentials;
        }

        const data = {
          $global: {
            methods: request.server.methods,
            query: request.query,
            user: session,
            page: 'archives',
            context: h.context
          }
        };

        return h.view('archives', data);
      }
    }
  }

];
