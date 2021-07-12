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
    root.Tophat = factory();
  }
}(typeof self !== 'undefined' ? self : this, () => {
  // 'use strict';


  // MODULE DEFINITION
  function Tophat(options = {}) {


    const project = {
      inspiration: '',
      version: '1.0.0',
      date: '2015-10-30',
      url: 'http://neven.ca',
      author: 'Knut Neven',
      email: 'neven@neven.ca'
    };




    /*
    MAIN OBJECT
     */


    const tophat = {};




    /*
    PRIVATE VARS
     */


    let ticking = false;
    let latest = 0;
    const inertia = 0;

    const elements = {
      image: '',
      wrapper: '',
      container: '',
      popoverLink: '',
      offsetTop: 0
    };




    /*
    PRIVATE FUNCTIONS
     */


    function initElements() {

      elements.image = options.path + options.image;
      elements.wrapper = document.querySelector(`#${options.wrapper}`);
      elements.container = document.querySelector(`#${options.container}`);
      const tophatOffset = getElementOffset(elements.wrapper);
      elements.offsetTop = tophatOffset.top;
      elements.popoverLink = document.querySelectorAll('[data-popover]');
    }


    function setOptions() {

      // elements.wrapper.style.backgroundImage = 'url(' + elements.image + ')';
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


    /**
     * our animation callback
     */
    function update() {

      const scrollPosition = getScrollY();
      if (elements.offsetTop < scrollPosition && !document.body.classList.contains('is-docked')) {
        document.body.classList.add('is-docked');
        elements.container.style.padding = '120px 0 0 0';
      }
      if (elements.offsetTop > scrollPosition && document.body.classList.contains('is-docked')) {
        document.body.classList.remove('is-docked');
        elements.container.style.padding = '60px 0 0 0';
      }

      // allow further rAF's to be called
      ticking = false;
    }


    function getElementOffset(element) {

      const de = document.documentElement;
      const box = getBoundingBox(element);
      const top = box.top + window.pageYOffset - de.clientTop;
      const left = box.left + window.pageXOffset - de.clientLeft;
      return { top, left };
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


    tophat.init = function (object) {

      Object.assign(options, object);
      initElements();
      setOptions();


      window.addEventListener('scroll', onScroll, false);
      for (let i = 0; i < elements.popoverLink.length; i++) {
        elements.popoverLink[i].addEventListener('click', openPopover, false);
      }
      document.addEventListener('click', closePopover, false);

    };




    /*
    RETURN PUBLIC POINTERS
    */


    return tophat;


  } // . MODULE DEFINITION


  return Tophat;


})); // . UMD WRAPPER








// const tophatOpts = {
//   image: 'krahn.jpg',
//   path: './',
//   wrapper: 'tophat',
//   container: 'container',
//   delay: 10
// };

// const tophat = Tophat();
// tophat.init(tophatOpts);
