'use strict';


// LOAD MODULES
//
const Good = require('@hapi/good');




// SERVER INTERNALS
//




// PLUGIN VARS
//

const production = {
  ops: {
    config: {},
    interval: 15000
  },
  includes: {
    request: ['headers', 'payload'],
    response: ['headers', 'payload']
  },
  reporters: {
    // ROTATING LOGFILE
    rotating: [{
      module: '@hapi/good-squeeze',
      name: 'Squeeze',
      args: [{
        error: '*',
        log: ['log', 'info', 'hapi', 'mongodb', 'nodemailer', 'cron', 'ics', 'cfc', 'fide', 'import', 'export'],
        // ops: '*',
        request: '*'
        // response: '*'
      }]

    }, {
      module: '@hapi/good-squeeze',
      name: 'SafeJson'

    }, {
      // https://github.com/iccicci/rotating-file-stream#upgrading-from-v1xx-to-v2xx
      module: 'rotating-file-stream',
      args: [
        'log.json.gzip',
        {
          interval: '1d',
          // intervalBoundary: true,
          path: './logs',
          compress: 'gzip'
        }
      ]
    }]
    // . ROTATING LOGFILE
  }
};

const development = {
  ops: {
    config: {},
    interval: 15000
  },
  includes: {
    request: ['headers', 'payload'],
    response: ['headers', 'payload']
  },
  reporters: {
    // CONSOLE LOG
    console: [{
      module: '@hapi/good-squeeze',
      name: 'Squeeze',
      args: [{
        error: '*',
        log: ['log', 'info', 'hapi', 'mongodb', 'nodemailer', 'cron', 'ics', 'cfc', 'fide', 'import', 'export'],
        // ops: '*',
        request: '*'
        // response: '*'
      }]

    }, {
      module: '@hapi/good-console',
      args: [{
        format: 'YYMMDD/HHmmss.SSS',
        utc: false,
        color: true
      }]
    },

    'stdout']
    // . CONSOLE LOG
  }
};




exports.plugin = {

  name: 'plugin-good',
  version: '0.0.1',


  register: async function (server, options) {

    const prod = !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? true : false;

    const opts = (prod === true) ? production : development;

    await server.register({
      plugin: Good,
      options: opts
    });

  }

};
