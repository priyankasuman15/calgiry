'use strict'; // UMD WRAPPER

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  // 'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // NODEJS COMMONJS
    module.exports = factory();
  } else {
    // BROWSER w ROOT -> WINDOW
    root.Sticky = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  // 'use strict';
  // MODULE DEFINITION
  function Sticky() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var project = {
      version: '1.0.0',
      date: '2015-10-12',
      url: 'http://neven.ca',
      author: 'Knut Neven',
      email: 'neven@neven.ca'
    };
    /*
    MAIN OBJECT
    */

    var sticky = {};
    /*
    PRIVATE VARS
    */

    var elements = {
      wrapper: '',
      wrapperOffset: '',
      wrapperParent: '',
      limit: '',
      limitOffset: '',
      limitParent: '',
      sticky: '',
      stickyOffset: '',
      stickyParent: '',
      stop: '',
      stopOffset: '',
      stopParent: ''
    };
    /*
    PRIVATE FUNCTIONS
    */

    function initElements() {
      elements.wrapper = document.querySelector("#".concat(options.wrapper));
      elements.wrapperOffset = elements.wrapper.offsetTop; // distance relative to parent

      elements.wrapperParent = elements.wrapper;
      elements.limit = document.querySelector("#".concat(options.limit));
      elements.limitOffset = elements.limit.offsetTop; // distance relative to parent

      elements.limitParent = elements.limit;
      elements.sticky = document.querySelector("#".concat(options.sticky)); // sticky

      elements.stickyOffset = elements.sticky.offsetTop; // distance relative to parent

      elements.stickyParent = elements.sticky; // elements.stop = document.querySelector(`#${options.stop}`); // stopper
      // elements.stopOffset = elements.stop.offsetTop; // distance relative to parent
      // elements.stopParent = elements.stop;
    }

    function calculateOffsets() {
      // loop through element parents to determine the distance relative to document top
      elements.wrapperOffset = getElementY(elements.wrapper, 'top');
      elements.limitOffset = getElementY(elements.limit, 'top');
      elements.stickyOffset = getElementY(elements.sticky, 'top'); // elements.stopOffset = _getElementY(elements.stop, 'top');
    }

    var onScroll = debounce(function () {
      var scrollPosition = getScrollY();

      if (scrollPosition > elements.stickyOffset - options.adjustment) {
        if (scrollPosition < elements.stickyOffset + elements.limit.clientHeight - elements.sticky.clientHeight) {
          options.mode === 'pixel' ? elements.sticky.style.top = scrollPosition - elements.stickyOffset + options.adjustment + 'px' : elements.sticky.className = 'sticky';
        }
      } else {
        options.mode === 'pixel' ? elements.sticky.style.top = '0px' : elements.sticky.className = '';
      }
    }, options.delay);
    /*
    PUBLIC FUNCTIONS
    */

    /*
    HELPER FUNCTIONS
    */

    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;

        var later = function later() {
          timeout = null;

          if (!immediate) {
            func.apply(context, args);
          }
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
          func.apply(context, args);
        }
      };
    }
    /**
     * gets the current scroll position from top of viewport
     *
     * @returns {number} - returns scrollY scroll position from top of viewport
     */


    function getScrollY() {
      var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      return scrollY;
    }

    function getElementY(element, side) {
      var position = 0;
      var elementHeight = element.offsetHeight;

      while (element) {
        position += element.offsetTop;
        element = element.offsetParent;
      }

      if (side === 'bottom') {
        position = position + elementHeight;
      }

      return position;
    }
    /*
    ENTRY POINT
    */


    sticky.init = function (object) {
      Object.assign(options, object);
      initElements();
      calculateOffsets();
      window.addEventListener('scroll', onScroll, false);
    };
    /*
    RETURN PUBLIC POINTERS
    */


    return sticky;
  } // . MODULE DEFINITION


  return Sticky;
}); // . UMD WRAPPER
// const stickyOpts = {
//   wrapper: 'stickyWrapperElement',
//   sticky: 'stickyElement',
//   limit: 'stickyLimitElement',
//   delay: 10,
//   adjustment: 24,
//   mode: 'pixel'
// };
// const sticky = Sticky();
// sticky.init(stickyOpts);