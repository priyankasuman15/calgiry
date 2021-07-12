'use strict';


// UMD WRAPPER
(function (root, factory) {
  // 'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  }
  else if (typeof module === 'object' && module.exports) {
    // NODEJS COMMONJS
    module.exports = factory();
  }
  else {
    // BROWSER w ROOT -> WINDOW
    root.Superhero = factory();
  }
}(typeof self !== 'undefined' ? self : this, () => {
  // 'use strict';


  // MODULE DEFINITION
  function Superhero(options = {}) {


    const project = {
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


    const superhero = {};




    /*
    PRIVATE VARS
    */


    let ticking = false;
    let latest = 0;
    const inertia = 0;

    const elements = {};




    /*
    PRIVATE FUNCTIONS
    */


    function initElements() {

      elements.container = document.querySelector('#' + options.container);
      elements.wrapper = document.querySelector('#' + options.wrapper);
      elements.sticky = document.querySelector('#' + options.sticky);
      elements.ledge = document.querySelector('#' + options.ledge);
      elements.banner = document.querySelector('#' + options.banner);
      elements.parallax = document.querySelector('#' + options.parallax);
      elements.boundary = elements.sticky.offsetTop;
    }


    function calculateOffsets() {

      elements.offsetContainer = getBoundingBox(elements.container).top;
      elements.heightWrapper = getBoundingBox(elements.wrapper).height;
      elements.heightSticky = getBoundingBox(elements.sticky).height;
      elements.heightBanner = getBoundingBox(elements.banner).height;
      elements.heightLedge = getBoundingBox(elements.ledge).height;
      elements.heightParallax = getBoundingBox(elements.parallax).height;
      elements.offset = options.offset;
    }


    /**
     * our animation callback
     */
    function update() {

      const current = latest + inertia;
      const isSticky = document.body.classList.contains('sticky');

      if (current > elements.boundary + elements.heightSticky) {
        if (!isSticky) {
          elements.wrapper.classList.add('sticky');
          elements.wrapper.style.height = elements.heightLedge + 'px';
          elements.sticky.style.display = 'none';
          // elements.ledge.style.background = 'rgba(0, 0, 0, .8)';
          elements.container.style.padding = elements.offset * 2 + elements.heightSticky + 'px 0 0 0';
        }
      }
      else {
        elements.wrapper.classList.remove('sticky');
        elements.sticky.style.display = 'block';
        elements.sticky.style.height = elements.heightSticky + 'px';
        elements.parallax.style.display = 'block';
        elements.wrapper.style.height = elements.heightWrapper + 'px';
        elements.container.style.padding = elements.offset + 'px 0 0 0';
      }

      // allow further rAF's to be called
      ticking = false;
    }

    /**
     * gets the size of an element and its position relative to the viewport
     *
     * @param {element} element - dom element we want to work with
     */
    function getBoundingBox(element) {

      const boundingBox = element.getBoundingClientRect();

      return boundingBox;
    }


    /**
     * gets the current scroll position from top of viewport
     *
     * @returns {number} - returns scrollY scroll position from top of viewport
     */
    function getScrollY() {

      const scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      return scrollY;
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


    superhero.init = function (object) {

      Object.assign(options, object);
      initElements();
      calculateOffsets();

      window.addEventListener('scroll', onScroll, false);
    };




    /*
    RETURN PUBLIC POINTERS
    */


    return superhero;


  } // . MODULE DEFINITION


  // return object or function
  return Superhero;


})); // . UMD WRAPPER








// const superheroOpts = {
//   wrapper: 'superhero',
//   sticky: 'window',
//   banner: 'banner',
//   ledge: 'ledge',
//   container: 'container',
//   parallax: 'parallax',
//   offset: 60,
//   // units: 'vh',
//   units: 'px'
// };

// const superhero = Superhero();
// superhero.init(superheroOpts);
