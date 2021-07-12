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
    root.Raf = factory();
  }
}(typeof self !== 'undefined' ? self : this, () => {
  // 'use strict';


  // MODULE DEFINITION
  function Raf(options = {}) {


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


    const raf = {};




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

      elements.container = document.querySelector(`#${options.container}`);
      elements.wrapper = document.querySelector(`#${options.wrapper}`);
      elements.sticky = document.querySelector(`#${options.sticky}`);
      elements.ledge = document.querySelector(`#${options.ledge}`);
      elements.banner = document.querySelector(`#${options.banner}`);
      elements.boundary = elements.sticky.offsetTop;
      // elements.trigger = options.units === 'vh' ? (elements.wrapper.height * (options.fade / 100)) : options.fade;
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

      const current = latest + inertia;
      const isSticky = document.body.classList.contains('sticky');

      if (current > elements.boundary + elements.heightBanner) {
        if (!isSticky) {
          elements.wrapper.classList.add('sticky');
          elements.banner.style.display = 'none';
          elements.sticky.style.height = `${elements.heightLedge}px`;
          elements.wrapper.style.height = `${elements.heightLedge}px`;
          elements.ledge.style.background = 'rgba(0, 0, 0, .2)';
          elements.container.style.padding = `${elements.offset + elements.heightSticky}px 0 0 0`;
        }
      }
      else {
        elements.wrapper.classList.remove('sticky');
        elements.banner.style.display = 'block';
        elements.sticky.style.height = `${elements.heightSticky}px`;
        elements.wrapper.style.height = `${elements.heightWrapper}px`;
        elements.container.style.padding = `${elements.offset}px 0 0 0`;
      }

      if (current > (elements.heightLedge - elements.trigger)) {
        elements.wrapper.classList.add('fade');
      }
      else {
        elements.wrapper.classList.remove('fade');
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


    function openPopover(event) {

      event.preventDefault();
      closePopover();
      const needle = this.dataset.popover.replace(/^#/, '');
      const popover = document.querySelector(`#${needle}`);
      popover.classList.toggle('open');
      event.stopImmediatePropagation();
    }


    function closePopover(event) {

      const popovers = document.querySelectorAll('.open');
      if (popovers.length > 0) {
        for (let i = 0; i < popovers.length; i++) {
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

      const popoverLink = document.querySelectorAll('[data-popover]');
      for (let i = 0; i < popoverLink.length; i++) {
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


})); // . UMD WRAPPER








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
