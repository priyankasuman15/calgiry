'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/upload',
    options: {
      description: 'Upload Get',
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

      validate: {},

      handler: function (request, h) {
        // if user is already authenticated...
        let session = null;
        if (request.auth.isAuthenticated && request.auth.isAuthorized) {
          session = request.auth.credentials;

          const data = {
            $global: {
              user: session,
              page: 'upload',
              context: h.context
            }
          };

          return h.view('upload', data);
        }

        const next = request.query.next ? request.query.next : '/login';
        return h.redirect(next);
      }
    }
  }

];
