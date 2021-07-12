'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/register',
    options: {
      description: 'Register Get',
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

      validate: {},

      handler: function (request, h) {
        // if user is already authenticated...
        if (request.auth.isAuthenticated) {
          const next = request.query.next ? request.query.next : '/user';
          return h.redirect(next);
        }

        const data = {
          $global: {
            page: 'register',
            context: h.context
          }
        };

        return h.view('register', data);
      }
    }
  }

];
