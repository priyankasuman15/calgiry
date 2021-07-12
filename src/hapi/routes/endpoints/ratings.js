'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'GET',
    path: '/ratings',
    options: {
      description: 'Ratings',
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

      handler: require('../handlers/ratings')
    }
  }

];
