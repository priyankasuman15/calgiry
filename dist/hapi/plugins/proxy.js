'use strict';


// LOAD MODULES
//
const Forwarded = require('forwarded');




exports.plugin = {

  name: 'plugin-proxy',
  version: '0.0.1',


  register: function (server, options) {

    // https://stackoverflow.com/questions/29496257/knowing-request-ip-in-hapi-js-restful-api
    // https://stackoverflow.com/questions/44064764/get-client-ip-address-in-request-hapijs-for-node
    // https://github.com/creativelive/hapi-ratelimit/issues/24
    // https://futurestud.io/tutorials/hapi-detect-and-get-the-client-ip-address
    // https://www.loadbalancer.org/blog/nginx-and-x-forwarded-for-header
    // https://github.com/hapijs/hapi/issues/1210

    // // node_modules/@hapi/hapi/lib/request.js
    // // required setter since request.info object is write-only
    // // NEVEN
    // set remoteAddress(value) {

    //   this._remoteAddress = value;

    //   return this._remoteAddress;
    // }
    // // . NEVEN

    // NGINX PROXY X-FORWARDED-FOR
    server.ext('onRequest', (request, h) => {


      // Object.defineProperty(request.info, 'remoteAddress', {

      //   set: function (value) {

      //     this._remoteAddress = value;

      //     return this._remoteAddress;
      //   }
      // });



      const remoteAddress = Forwarded(request.raw.req).pop().trim();

      if (remoteAddress) {
       // request.info.remoteAddress = remoteAddress;
      }

      // const xff = request.headers['x-forwarded-for'];
      // const real = request.headers['real_ip'];
      // const ip = xff ? xff.split(',')[0] : request.info.remoteAddress;
      // server.log(['info', 'proxy'], `xff ${xff} real ${real} ip ${ip}`);
      // server.log(['info', 'proxy'], `remoteAddress ${remoteAddress}`);
      // server.log(['info', 'proxy'], `request.info.remoteAddress ${request.info.remoteAddress}`);

      // server.log(['info', 'proxy'], `${request.info.remoteAddress}`);

      return h.continue;
    });

  }

};
