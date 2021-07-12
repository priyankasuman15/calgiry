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
    root.Raf = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  // 'use strict';
  // MODULE DEFINITION
  function Raf() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var project = {
      inspiration: 'https://www.html5rocks.com/en/tutorials/speed/animations/',
      version: '1.0.0',
      date: '2017-11-22',
      url: 'http://neven.ca',
      author: 'Knut Neven',
      email: 'neven@neven.ca'
    };
    /*
    MAIN OBJECT
    */

    var raf = {};
    /*
    PRIVATE VARS
    */

    var ticking = false;
    var latest = 0;
    var inertia = 0;
    var elements = {};
    /*
    PRIVATE FUNCTIONS
    */

    function initElements() {
      elements.container = document.querySelector("#".concat(options.container));
      elements.wrapper = document.querySelector("#".concat(options.wrapper));
      elements.sticky = document.querySelector("#".concat(options.sticky));
      elements.ledge = document.querySelector("#".concat(options.ledge));
      elements.banner = document.querySelector("#".concat(options.banner));
      elements.boundary = elements.sticky.offsetTop; // elements.trigger = options.units === 'vh' ? (elements.wrapper.height * (options.fade / 100)) : options.fade;
    }

    function calculateOffsets() {
      elements.offsetContainer = getBoundingBox(elements.container).top;
      elements.heightWrapper = getBoundingBox(elements.wrapper).height;
      elements.heightSticky = getBoundingBox(elements.sticky).height;
      elements.heightBanner = getBoundingBox(elements.banner).height;
      elements.heightLedge = getBoundingBox(elements.ledge).height;
      elements.offset = options.offset;
      elements.trigger = 20;
    }
    /**
     * our animation callback
     */


    function update() {
      var current = latest + inertia;
      var isSticky = document.body.classList.contains('sticky');

      if (current > elements.boundary + elements.heightBanner) {
        if (!isSticky) {
          elements.wrapper.classList.add('sticky');
          elements.banner.style.display = 'none';
          elements.sticky.style.height = "".concat(elements.heightLedge, "px");
          elements.wrapper.style.height = "".concat(elements.heightLedge, "px");
          elements.ledge.style.background = 'rgba(0, 0, 0, .2)';
          elements.container.style.padding = "".concat(elements.offset + elements.heightSticky, "px 0 0 0");
        }
      } else {
        elements.wrapper.classList.remove('sticky');
        elements.banner.style.display = 'block';
        elements.sticky.style.height = "".concat(elements.heightSticky, "px");
        elements.wrapper.style.height = "".concat(elements.heightWrapper, "px");
        elements.container.style.padding = "".concat(elements.offset, "px 0 0 0");
      }

      if (current > elements.heightLedge - elements.trigger) {
        elements.wrapper.classList.add('fade');
      } else {
        elements.wrapper.classList.remove('fade');
      } // allow further rAF's to be called


      ticking = false;
    }
    /**
     * gets the size of an element and its position relative to the viewport
     *
     * @param {element} element - dom element we want to work with
     */


    function getBoundingBox(element) {
      var boundingBox = element.getBoundingClientRect();
      return boundingBox;
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

    function openPopover(event) {
      event.preventDefault();
      closePopover();
      var needle = this.dataset.popover.replace(/^#/, '');
      var popover = document.querySelector("#".concat(needle));
      popover.classList.toggle('open');
      event.stopImmediatePropagation();
    }

    function closePopover(event) {
      var popovers = document.querySelectorAll('.open');

      if (popovers.length > 0) {
        for (var i = 0; i < popovers.length; i++) {
          popovers[i].classList.remove('open');
        }
      }
    }
    /*
    PUBLIC FUNCTIONS
    */

    /*
    HELPER FUNCTIONS
    */

    /**
     * callback for 'scroll' event
     * keeps track of latest scroll value and hands execution off to rAF
     */


    function onScroll() {
      latest = getScrollY();
      requestTick();
    }
    /**
     * calls rAF with update() parameter if it's not running already
     */


    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    /*
    ENTRY POINT
    */


    raf.init = function (object) {
      Object.assign(options, object);
      initElements();
      calculateOffsets();
      var popoverLink = document.querySelectorAll('[data-popover]');

      for (var i = 0; i < popoverLink.length; i++) {
        popoverLink[i].addEventListener('click', openPopover, false);
      }

      document.addEventListener('click', closePopover, false);
      window.addEventListener('scroll', onScroll, false);
    };
    /*
    RETURN PUBLIC POINTERS
    */


    return raf;
  } // . MODULE DEFINITION
  // return object or function


  return Raf;
}); // . UMD WRAPPER
// const rafOpts = {
//   wrapper: 'raf',
//   sticky: 'sticky',
//   banner: 'banner',
//   ledge: 'ledge',
//   container: 'container',
//   offset: 50,
//   units: 'vh'
// };
// const raf = Raf();
// raf.init(rafOpts);