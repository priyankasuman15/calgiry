'use strict';


// LOAD MODULES
//
const Nodemailer = require('nodemailer');


// SERVER INTERNALS
//




exports.plugin = {

  name: 'plugin-nodemailer',
  version: '0.0.1',


  register: async function (server, options) {

    const config = options.smtp;

    const transporter = await Nodemailer.createTransport(config);

    // verify connection configuration
    transporter.verify((error, success) => {

      if (error) {
        server.log(['error', 'nodemailer'], error);
      }

      server.log(['info', 'nodemailer'], 'nodemailer ready');

      server.decorate('request', 'getMailer', () => {

        return transporter;
      });
    });

  }

};
