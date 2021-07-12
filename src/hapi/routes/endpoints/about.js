'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/about',
    options: {
      description: 'About',
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

      validate: {},

      handler: function (request, h) {
        // if user is already authenticated...
        let session = null;
        if (request.auth.isAuthenticated) {
          session = request.auth.credentials;
        }

        const data = {
          $global: {
            user: session,
            page: 'about',
            context: h.context
          }
        };

        return h.view('about', data);
      }
    }
  }

];
