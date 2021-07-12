'use strict';


// LOAD MODULES
//




exports.plugin = {

  name: 'plugin-404',
  version: '0.0.1',


  register: function (server, options) {

    // DEAL WITH STATUS CODE 404 'Not Found'
    server.ext('onPreResponse', (request, h) => {

      const response = request.response;

      if (response.isBoom && response.output.statusCode === 404) {

        return h.redirect('/blog');
      }

      return h.continue;
    });

  }

};
