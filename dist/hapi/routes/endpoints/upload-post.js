'use strict';


// LOAD MODULES
//




module.exports = [

  {
    method: 'POST',
    path: '/upload',
    options: {
      description: 'Upload Post',
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

      payload: {
        // ~20MB maximum
        maxBytes: 20971520,
        output: 'stream',
        // allow: 'multipart/form-data',
        parse: true
      },

      handler: require('../handlers/upload')
    }
  }

];
