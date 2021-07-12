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
    root.Parallax = factory();
  }
}(typeof self !== 'undefined' ? self : this, () => {
  // 'use strict';


  // MODULE DEFINITION
  function Parallax(options = {}) {


    const project = {
      version: '1.0.0',
      date: '2018-02-23',
      url: 'http://neven.ca',
      author: 'Knut Neven',
      email: 'neven@neven.ca'
    };




    /*
    MAIN OBJECT
    */


    const parallax = {};




    /*
    PRIVATE VARS
    */


    const elements = {};




    /*
    PRIVATE FUNCTIONS
    */


    function initElements() {

      elements.wrapper = document.querySelector(`#${options.wrapper}`);
      elements.scenes = options.scenes || 'parallax';
      elements.extension = options.extension || 'png';
      elements.height = options.height || 240;
      elements.layers = options.layers || 6;
      elements.from = options.from || 0;
      elements.to = options.to || 240;
      elements.modifier = [0, 6, 8, 12, 18, 30];
    }


    function buildHTML() {

      let template = '';

      for (let i = elements.modifier.length; i > 0; i--) {
        template += `<img class="scene s${i}" data-modifier="${elements.modifier[i - 1]}">`;
      }

      elements.wrapper.appendChild(html2fragment(template));
    }


    function updateStyles() {

      elements.wrapper.style.height = `${elements.height}px`;
      elements.wrapper.style.backgroundImage = `url("../img/${options.scenes}.${elements.extension}")`;

      for (let i = 1; i <= elements.layers; i++) {
        const element = document.querySelector(`.s${i}`);
        element.style.backgroundImage = `url("../img/parallax/${elements.scenes}${i}.${elements.extension}")`;
        element.style.height = `${elements.height}px`;
      }
    }


    function start() {

      document.querySelectorAll('.scene').forEach((element) => {

        const modifier = element.getAttribute('data-modifier');
        basicScroll.create({
          elem: element,
          from: elements.from,
          to: elements.to,
          props: {
            '--translateY': {
              from: '0',
              to: `${10 * modifier}px`,
              direct: true
            }
          }
        }).start();
      });
    }




    /*
    PUBLIC FUNCTIONS
    */




    /*
    HELPER FUNCTIONS
    */


    // https://gist.github.com/ryanmorr/58495cf47fc783bac8c8783c9e517e0b
    function html2fragment(html) {

      const template = document.createElement('template');
      if ('content' in template) {
        template.innerHTML = html;
        return document.importNode(template.content, true);
      }

      const fragment = document.createDocumentFragment();
      const proxy = document.createElement('div');
      proxy.innerHTML = html;
      while (proxy.firstChild) {
        fragment.appendChild(proxy.firstChild);
      }
      return fragment;
    }




    /*
    ENTRY POINT
    */


    parallax.init = function (object) {

      Object.assign(options, object);
      initElements();
      buildHTML();
      updateStyles();
      start();
    };




    /*
    RETURN PUBLIC POINTERS
    */

    return parallax;


  } // . MODULE DEFINITION


  // return object or function
  return Parallax;


})); // . UMD WRAPPER








// const parallaxOpts = {
//   wrapper: 'parallax',
//   scenes: 'krahn',
//   extension: 'png',
//   height: 480,
//   layers: 6,
//   from: 0,
//   to: 480,
//   modifier: [30, 18, 12, 8, 6, 0]
// };

// const parallax = Parallax();
// parallax.init(parallaxOpts);
