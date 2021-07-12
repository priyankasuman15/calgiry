'use strict'; // https://github.com/sindresorhus/element-ready

var PCancelable = require('p-cancelable');

var targetCache = new WeakMap();

var cleanCache = function cleanCache(target, selector) {
  targetCache.get(target).delete(selector);

  if (!targetCache.get(target).size) {
    targetCache.delete(target);
  }
};

module.exports = function (selector, options) {
  options = Object.assign({
    target: document
  }, options);

  if (targetCache.has(options.target) && targetCache.get(options.target).has(selector)) {
    return targetCache.get(options.target).get(selector);
  }

  var promise = new PCancelable(function (onCancel, resolve) {
    var raf;
    onCancel(function () {
      cancelAnimationFrame(raf);
      cleanCache(options.target, selector);
    }); // Interval to keep checking for it to come into the DOM

    (function check() {
      var el = options.target.querySelector(selector);

      if (el) {
        resolve(el);
        cleanCache(options.target, selector);
      } else {
        raf = requestAnimationFrame(check);
      }
    })();
  });

  if (targetCache.has(options.target)) {
    targetCache.get(options.target).set(selector, promise);
  } else {
    targetCache.set(options.target, new Map([[selector, promise]]));
  }

  return promise;
}; // USAGE
// const elementReady = require('element-ready');
// (async () => {
//   const element = await elementReady('#unicorn');
//   console.log(element.id);
// })();