'use strict'; // https://github.com/sindresorhus/dom-loaded

module.exports = new Promise(function (resolve) {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      resolve();
    }, {
      capture: true,
      once: true,
      passive: true
    });
  }
}); // USAGE
// const domLoaded = require('dom-loaded');
// domLoaded.then(() => {
//   console.log('DOM is loaded');
// });