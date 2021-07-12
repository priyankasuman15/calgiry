'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/user',
    options: {
      description: 'User Get',
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

      validate: {},

      handler: function (request, h) {
        // if user is already authenticated...
        let session = null;
        if (request.auth.isAuthenticated && request.auth.isAuthorized) {
          session = request.auth.credentials;

          const data = {
            $global: {
              user: session,
              page: 'user',
              context: h.context
            }
          };

          return h.view('user', data);
        }

        const next = request.query.next ? request.query.next : '/login';
        return h.redirect(next);
      }
    }
  }

];
