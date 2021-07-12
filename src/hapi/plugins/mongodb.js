'use strict';


// LOAD MODULES
//
const Mongo = require('mongodb');


// SERVER INTERNALS
//




exports.plugin = {

  name: 'plugin-mongodb',
  version: '0.0.1',


  register: async function (server, options) {

        //const url = `mongodb://${options.settings.user}:${options.settings.pw}@${options.settings.bind}:${options.settings.port}/${options.settings.db}?authMechanism=${options.settings.auth}&authSource=${options.settings.source}`;
const url = `mongodb://${options.settings.user}:${options.settings.pw}@${options.settings.bind}:${options.settings.port}/${options.settings.db}`;
    // https://github.com/hapijs/hapi/issues/1025
    // http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
    // https://stackoverflow.com/questions/57546635/warning-on-connecting-to-mongodb-with-a-node-server
    // MongoClient connection pooling, i.e. application shares a single database connection
    await Mongo.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {

      if (error) {
        server.log(['error', 'mongodb'], error);
        process.exit(0);

        return;
      }

      server.log(['info', 'mongodb'], 'mongodb connection ready');

      server.decorate('request', 'getMongo', () => {

        const db = client.db(options.settings.db);

        return db;
      });

    });

  }

};
