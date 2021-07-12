'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/reset',
    options: {
      description: 'Reset Password Get',
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
          const next = request.query.next ? request.query.next : '/change';
          return h.redirect(next);
        }

        const data = {
          $global: {
            method: request.method,
            page: 'reset',
            context: h.context
          }
        };

        return h.view('reset', data);
      }
    }
  }

];
