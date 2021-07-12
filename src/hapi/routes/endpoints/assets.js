'use strict';


// LOAD MODULES
//
const path = require('path');


// SERVER INTERNALS
//
const schemas = require('../../configs/schemas');




module.exports = [

  // ASSETS
  {
    method: 'GET',
    path: '/{path*}',
    options: {
      description: 'Serving From Root Assets Folder',
      notes: [],
      tags: [],
      auth: false,
      plugins: {
        'hapi-rate-limit': { pathLimit: false, userLimit: false }
      },
      pre: [],
      cache: {},

      handler: {
        directory: {
          // path: adjust '../../..' to match location of assets folder
          // relative to hapi/views/layouts/layout.html
          path: path.join(__dirname, '../../..', 'assets'),
          index: false,
          listing: false
        }
      }
    }
  },

  // PROTECTED DOWNLOADS
  {
    method: 'GET',
    path: '/downloads/rdb/{path*}',
    options: {
      description: 'Protected Research Database Updates',
      notes: [],
      tags: [],
      auth: {
        strategy: 'session',
        scope: ['user', 'admin']
      },
      plugins: {
        'hapi-rate-limit': { pathLimit: false }
      },
      pre: [],
      cache: {},

      validate: {
        headers: true,
        query: false,
        params: schemas.schemas.archive
      },

      handler: {
        directory: {
          // path: adjust '../../..' to match location of assets folder
          // relative to hapi/views/layouts/layout.html
          path: path.join(__dirname, '../../..', 'assets/downloads/rdb'),
          index: false,
          listing: false
        }
      }
    }
  }

];
