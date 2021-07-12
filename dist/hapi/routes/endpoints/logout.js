'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/logout',
    options: {
      description: 'Logout',
      notes: [],
      tags: [],
      auth: 'session',
      plugins: {},
      pre: [],
      cache: {},

      validate: {},

      handler: function (request, h) {

        request.cookieAuth.clear();

        return h.redirect('/');
      }
    }
  }

];
