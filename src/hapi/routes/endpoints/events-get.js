'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/events',
    options: {
      description: 'Events',
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

      handler: require('../handlers/events-get')
    }
  }

];
