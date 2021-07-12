'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/',
    options: {
      description: 'Vision Template Engine',
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

      // http://stackoverflow.com/questions/25355508/hapi-auth-cookie-not-setting-cookie
      // instead of auth: false, access to authentication/session
      // data for unauthenticated route without causing redirect
      // as per-route configuration above
      handler: function (request, h) {

        const data = {
          $global: {
            page: 'blog',
            context: h.context
          }
        };

        return h.view('blog', data);
      }
    }
  }

];
