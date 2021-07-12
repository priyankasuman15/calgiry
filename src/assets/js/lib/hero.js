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
    root.Hero = factory();
  }
}(typeof self !== 'undefined' ? self : this, () => {
  // 'use strict';


  // MODULE DEFINITION
  function Hero(options = {}) {


    const project = {
      inspiration: 'http://codepen.io/magnificode/pen/GpqGOm',
      version: '1.0.0',
      date: '2015-10-30',
      url: 'http://neven.ca',
      author: 'Knut Neven',
      email: 'neven@neven.ca'
    };




    /*
    MAIN OBJECT
     */


    const hero = {};




    /*
    PRIVATE VARS
     */


    let ticking = false;
    let latest = 0;
    const inertia = 0;

    const elements = {
      image: '',
      wrapper: '',
      trigger: 0
    };




    /*
    PRIVATE FUNCTIONS
     */


    function initElements() {

      elements.image = options.path + options.image;
      elements.wrapper = document.querySelector(`#${options.wrapper}`);
      elements.wrapper.height = elements.wrapper.clientHeight;
      elements.wrapperParent = elements.wrapper;
      elements.wrapper.parentNode.style.paddingTop = (elements.wrapper.clientHeight + options.padding) + 'px';
      elements.trigger = options.units === 'vh' ? (elements.wrapper.height * (options.fade / 100)) : options.fade;
    }


    function setOptions() {

      elements.wrapper.style.backgroundImage = 'url(' + elements.image + ')';
      elements.wrapper.style.maxHeight = options.max + options.units;
      elements.wrapper.style.minHeight = options.min + options.units;
    }


    /**
     * our animation callback
     */
    function update() {

      const scrollPosition = getScrollY();
      if (scrollPosition < elements.wrapper.height) {
        elements.wrapper.style.height = (elements.wrapper.height - scrollPosition) + 'px';
        elements.wrapper.parentNode.style.paddingTop = (elements.wrapper.height + options.padding) + 'px';
      }

      if (scrollPosition > (elements.wrapper.height - elements.trigger)) {
        elements.wrapper.classList.add('fade');
      }
      else {
        elements.wrapper.classList.remove('fade');
      }

      // allow further rAF's to be called
      ticking = false;
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


    hero.init = function (object) {

      Object.assign(options, object);
      initElements();
      setOptions();

      window.addEventListener('scroll', onScroll, false);
    };




    /*
    RETURN PUBLIC POINTERS
    */


    return hero;


  } // . MODULE DEFINITION


  return Hero;


})); // . UMD WRAPPER








//   const heroOpts = {
//     image: 'krahn.jpg',
//     path: './img/',
//     wrapper: 'hero',
//     padding: 0,
//     fade: 20,
//     max: 40,
//     min: 20,
//     units: 'vh',
//     delay: 250
//   };

//   const hero = Hero();
//   hero.init(heroOpts);
