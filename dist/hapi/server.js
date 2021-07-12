'use strict';


// LOAD MODULES
//
const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');




// GLOBAL CONTEXT
//
const context = require('./controllers/context');




// SERVER INTERNALS
//
const internals = require('./configs/manifest');




// SERVER CONFIGURATION
//
const server = Hapi.Server(internals.servers.hapi);




// SERVER REGISTRATIONS
//
async function register() {

  try {

    // BIND GLOBAL CONTEXT
    server.bind(context);

    await server.register([
      {
        plugin: require('@hapi/inert'),
        options: {}

      }, {
        plugin: require('@hapi/vision'),
        options: {}

      }, {
        plugin: require('@hapi/cookie'),
        options: {}

      }, {
        plugin: require('blipp'),
        options: {
          showAuth: true,
          showStart: false
        }

      }, {
        plugin: require('./plugins/proxy'),
        options: {}

      }, {
        plugin: require('./plugins/good'),
        options: {}

      }, {
        plugin: require('./plugins/404'),
        options: {}

      }, {
        plugin: require('./plugins/mongodb'),
        options: {
          settings: {
            bind: internals.servers.mongodb.bind,
            port: internals.servers.mongodb.port,
            user: internals.servers.mongodb.user,
            pw: internals.servers.mongodb.pw,
            db: internals.servers.mongodb.db,
            auth: internals.servers.mongodb.auth,
            source: internals.servers.mongodb.source
          },
          decorate: true
        }

      }, {
        plugin: require('./plugins/nodemailer'),
        options: {
          smtp: internals.servers.smtp.wan,
          decorate: true
        }

      }, {
        plugin: require('hapi-rate-limit'),
        options: {
          enabled: true,
          userLimit: 256,
          userCache: {
            expiresIn: 64000 // 64 x 1000 = 64 seconds
          },
          userAttribute: 'id',
          userWhitelist: ['897986500'], // []
          addressOnly: false,
          pathLimit: 32,
          pathCache: {
            expiresIn: 64000 // 64 x 1000 = 64 seconds
          },
          headers: false, // true
          ipWhitelist: [],
          trustProxy: false
        }

      }, {
        plugin: require('./controllers/methods'),
        options: {}
      }
    ]);


    // SERVER VIEWS MarkoJS
    server.views({
      engines: {
        marko: {
          compile: (src, options) => {

            const opts = {
              preserveWitespace: true,
              writeToDisk: false
            };
            const template = require('marko').load(options.filename, opts);

            return (page) => {

              return template.renderToString(page);
            };
          }
        }
      },
      encoding: 'utf8',
      relativeTo: __dirname,
      path: ['./views'],
      partialsPath: './views/partials',
      helpersPath: './views/helpers',
      layoutPath: './views/layouts',
      layoutKeyword: 'content',
      layout: false,
      compileMode: 'sync',
      defaultExtension: 'marko',
      contentType: 'text/html',
      isCached: true,
      context
    });


    // SERVER AUTHENTICATION
    server.auth.strategy('session', 'cookie', {
      cookie: {
        name: 'login',
        password: '$2a$08$7sw500.Y/EMi9c9j4fgEMOpIZV7W0Xuc8Oh6Oyg0Q8Q6NFyT.GQM.',
        ttl: 1 * 24 * 60 * 60 * 1000, // 24 hours
        clearInvalid: true,
        isSameSite: 'Strict',
        isSecure: !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? true : false,
        isHttpOnly: true
      },
      keepAlive: false,
      redirectTo: '/login',
      appendNext: true
    });

    server.auth.default({
      mode: 'try',
      strategy: 'session',
      scope: ['admin'] // default scope
    });


    // ROUTES
    const routes = require('./routes/routes');

    server.route(routes);

  }


  catch (error) {

    Hoek.assert(!error, error);

  }

}








// START SERVER
//
async function start() {

  try {

    await register();
    server.log(['info', 'hapi'], 'registering plugins');

    await server.start();

  }

  catch (error) {

    server.log(['error', 'hapi'], '*** SERVER START FAILED ***');
    Hoek.assert(!error, error);
    process.exit(1);

  }
}




start();
