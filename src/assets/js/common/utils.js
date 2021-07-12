'use strict';

// DOCUMENT READY without jQuery, IE9+

function ready(callback) {

  if (document.readyState !== 'loading') {
    callback();
  }
  else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

// DOCUMENT READY usage, run code in callback
ready(() => {

  initProgressBar();
  externalLinks();
  // current();
  // initScroll();
  // initParallax();
  // initSuperhero();
  // initFlatpickr();
  // slideshow();
  // initHero();
  // initRav();
  // initTophat();
  // initUmlaut();
});








// PROGRESS
// https://alligator.io/js/progress-bar-javascript-css-variables/
function initProgressBar() {

  const doc = document.documentElement;
  const body = document.body;
  const progress = document.querySelector('.progress');
  let scroll = void 0;
  // const scrollColor = 'rgba(100, 120, 140, .5)';
  const scrollColor = 'rgba(238, 39, 36, 1)';

  document.addEventListener('scroll', () => {

    scroll = (doc.scrollTop || body.scrollTop) / ((doc.scrollHeight || body.scrollHeight) - doc.clientHeight);
    progress.style.setProperty('--scroll', scroll);
    progress.style.setProperty('--scroll-color', scrollColor);
  });
}


// PARALLAX
function initParallax() {

  const parallaxOpts = {
    wrapper: 'parallax',
    scenes: 'krahn',
    extension: 'png',
    height: 480,
    layers: 6,
    from: 0,
    to: 480,
    modifier: [30, 18, 12, 8, 6, 0]
  };

  const parallax = Parallax();
  parallax.init(parallaxOpts);
}


// SUPERHERO
function initSuperhero() {

  const superheroOpts = {
    wrapper: 'superhero',
    sticky: 'window',
    banner: 'banner',
    ledge: 'ledge',
    container: 'container',
    parallax: 'parallax',
    offset: 60,
    // units: 'vh',
    units: 'px'
  };

  const superhero = Superhero();
  superhero.init(superheroOpts);
}


// RAF
function initRaf() {

  const rafOpts = {
    wrapper: 'raf',
    sticky: 'sticky',
    banner: 'banner',
    ledge: 'ledge',
    container: 'container',
    offset: 50,
    units: 'vh'
  };

  const raf = Raf();
  raf.init(rafOpts);
}


// TOPHAT
function initTophat() {

  const tophatOpts = {
    image: 'krahn.jpg',
    path: './',
    wrapper: 'tophat',
    container: 'container',
    delay: 10
  };

  const tophat = Tophat();
  tophat.init(tophatOpts);
}


// HERO
function initHero() {

  const heroOpts = {
    image: 'krahn.jpg',
    path: './img/',
    wrapper: 'hero',
    padding: 0,
    fade: 20,
    max: 40,
    min: 20,
    units: 'vh',
    delay: 250
  };

  const hero = Hero();
  hero.init(heroOpts);
}


// UMLAUT
function initUmlaut() {

  const umlaut = Umlaut();
  umlaut.init({
    dictionaries: ['deu']
  });
  const output = umlaut.clean('Günther Özel \'Ä\': \'Ae\', \'Ö\': \'Oe\', \'Ü\': \'Ue\', \'ä\': \'ae\', \'ö\': \'oe\', \'ü\': \'ue\', \'ß\': \'ss\'');
  console.log(output);
}




// EXTERNAL LINKS
function externalLinks() {

  const internal = new RegExp('^((f|ht)tps?:)?(//)?(' + window.location.host + ')');
  const links = document.getElementsByTagName('a');
  for (let i = links.length - 1; i >= 0; i--) {
    if (!internal.test(links[i].host)) {
      links[i].target = '_blank';
      // https://www.tutorialdocs.com/article/html-opener-blank.html
      links[i].rel = 'noopener noreferrer nofollow';
    }
  }
}


// CURRENT LINKS
function current() {

  const defaultPage = 'news';
  const index = (window.location.href).lastIndexOf('/') + 1;
  let current = (window.location.href).slice(index);
  // in case we accessed location.host without a path
  if (!current) {
    current = defaultPage;
  }

  const links = document.querySelectorAll('[href*="' + current + '"]');
  for (let i = links.length - 1; i >= 0; i--) {
    links[i].classList.add('current');
  }
}




// http://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
function initScroll() {

  const links = document.querySelectorAll('[href^="#"]');
  for (let i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', willScrollTo, false);
  }
}


function scrollTo(element, to, duration) {

  if (duration <= 0) {
    return;
  }

  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;
  setTimeout(() => {

    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) {
      return;
    }

    scrollTo(element, to, duration - 10);
  }, 10);
}


function willScrollTo(e) {

  e.preventDefault();
  const element = e.target;
  const parsed = element.getAttribute('href').replace('#', '');
  const link = document.getElementById(parsed);

  // scrollTo(document.body, link.offsetTop, 600);
  scrollTo(fixScrollTop(), link.offsetTop, 600);
}


// https://dev.opera.com/articles/fixing-the-scrolltop-bug/
function fixScrollTop() {

  if ('scrollingElement' in document) {
    return document.scrollingElement;
  }

  if (navigator.userAgent.indexOf('WebKit') !== -1) {
    return document.body;
  }

  return document.documentElement;
}




// /* https://www.chenhuijing.com/blog/building-a-css-only-image-gallery */
// function slideshow() {

//   const elements = document.querySelectorAll('.thumbs a');
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', (e) => {

//       e.preventDefault();
//       handleSlideshowClick(e);
//     });
//   }
// }


// function handleSlideshowClick(e) {

//   const hash = e.currentTarget.hash;
//   const index = hash.search(/\d/);
//   const unique = hash.slice(1, index);
//   const image = hash.slice(index);
//   const elements = document.querySelectorAll(`.slides li[id^="${unique}"]`);
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].classList.remove('slideshowIn');
//     elements[i].classList.add('slideshowOut');
//   }
//   const element = document.querySelector(hash);
//   element.classList.remove('slideshowOut');
//   element.classList.add('slideshowIn');
// }
