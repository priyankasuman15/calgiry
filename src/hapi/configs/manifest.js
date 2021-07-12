'use strict';


// LOAD MODULES
//
const Boom = require('@hapi/boom');

// with pm2 the NODE_ENV needs to be configured in ecosystem.config.js
// using dotenv preload in package.json with "npm run hapidotenv"
// or
// require('dotenv').config();
// const env = {
//   TZ: process.env.TZ,
//   HOST_PUBLIC: process.env.HOST_PUBLIC,
//   MONGO_BIND: process.env.MONGO_BIND,
//   MONGO_PORT: process.env.MONGO_PORT,
//   MONGO_USER: process.env.MONGO_USER,
//   MONGO_PW: process.env.MONGO_PW,
//   MONGO_DB: process.env.MONGO_DB,
//   MONGO_AUTH: process.env.MONGO_AUTH,
//   MONGO_SOURCE: process.env.MONGO_SOURCE,
//   MAIL_HOST: process.env.MAIL_HOST,
//   MAIL_PORT: process.env.MAIL_PORT,
//   MAIL_USER: process.env.MAIL_USER,
//   MAIL_PW: process.env.MAIL_PW
// };


const production = !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? true : false;
const host_ip = production ? 'localhost' : '127.0.0.1';
const host_port = production ? 3001 : 8888;
const debug = production ? false : { log: ['*'], request: ['*'] };




module.exports = {

  servers: {

    hapi: {
      host: process.env.HOST_PUBLIC,
      address: host_ip,
      port: host_port,
      router: {
        stripTrailingSlash: true,
        isCaseSensitive: true
      },
      routes: {
        validate: {
          failAction: async (request, h, error) => {

            if (process.env.NODE_ENV === 'production') {
              // limited error message and default Boom.badRequest error
              await console.error('validation error:', error.message);
              throw Boom.badRequest(`validation error: invalid request payload input`);
            }
            else {
              // log and respond with full error
              await console.error(error);
              throw error;
            }
          }
        }
      },
      // TODO
      debug
    },

    mongodb: {
      bind: process.env.MONGO_BIND,
      port: process.env.MONGO_PORT,
      user: encodeURIComponent(process.env.MONGO_USER),
      pw: encodeURIComponent(process.env.MONGO_PW),
      db: process.env.MONGO_DB,
      auth: process.env.MONGO_AUTH,
      source: process.env.MONGO_SOURCE
    },

    smtp: {
      wan: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PW
        }
      },

      lan: {
        host: process.env.HOST_PUBLIC,
        port: 25,
        secure: false,
        auth: {
          user: '',
          pass: ''
        }
      }
    }

  },

  addresses: {
    admin: 'admin@calgarychess.com',
    info: 'info@calgarychess.com',
    organizer: 'organizer@calgarychess.com',
    payments: 'payments@calgarychess.com',
    president: 'president@calgarychess.com',
    vicepresident: 'vicepresident@calgarychess.com',
    treasurer: 'treasurer@calgarychess.com',
    secretary: 'secretary@calgarychess.com'
  }

};
