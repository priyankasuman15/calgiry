'use strict';
/*
  global containsClass, removeClass, getBoundingBox, addClass, getScrollY
*/
// https://stackoverflow.com/questions/3659072/how-to-disable-anchor-jump-when-loading-a-page/3659116#3659116
// https://stackoverflow.com/questions/27096621/how-to-disable-anchor-jump-when-loading-a-page/29823834#29823834
// strip window.location.hash before browser scrolls
// scroll to hash with hash() function afterwards
// let target = window.location.hash;
// target = target.replace('#', '');
// window.location.hash = '';

function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

ready(function () {
  slideshow();
  watcher();
  initScroll();
  external();
  currentPage();
  visibility(); // hashJumpDelay();
  // splash();
  // quicklink({
  //   timeout: 2000,
  //   urls: ['about', 'archives', 'blog', 'classes', 'events', 'membership', 'ratings'],
  //   origins: ['calgarychess.com'],
  //   ignores: [(uri) => uri.includes('#')]
  // });
}); // SLIDESHOW

function slideshow() {
  var slideshows = document.querySelectorAll('.slideshow');
  var slides = [];
  var thumbs = [];

  for (var i = 0; i < slideshows.length; ++i) {
    slides.push(slideshows[i].querySelectorAll('.slides li'));
    thumbs.push(slideshows[i].querySelectorAll('.thumbs li'));
  }

  var _loop = function _loop(_i) {
    for (var j = 0; j < thumbs[_i].length; ++j) {
      thumbs[_i][j].addEventListener('click', function (e) {
        var nodes = e.currentTarget.childNodes;
        var match = nodes[0].href.slice(nodes[0].href.lastIndexOf('#') + 1);

        for (var k = 0; k < slides[_i].length; ++k) {
          slides[_i][k].style.opacity = 0;
          slides[_i][k].style.zIndex = 1;
        }

        for (var _k = 0; _k < slides[_i].length; ++_k) {
          if (slides[_i][_k].id === match) {
            slides[_i][_k].style.zIndex = 2;
            slides[_i][_k].style.opacity = 1;
          }
        }
      }, false);
    }
  };

  for (var _i = 0; _i < thumbs.length; ++_i) {
    _loop(_i);
  }
}

function watcher() {
  var scrollPosition = 0;
  var scrollHeight = document.body.scrollHeight;
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight; // const banner = document.querySelector('.banner');

  var overlay = document.querySelector('.overlay');
  var responsive = document.querySelector('.responsive');
  var sidebar = document.querySelector('.sidebar');
  var progress = document.querySelector('.progress');
  var timeout;
  var ticking = false;
  var event = '';

  function handler_scroll_progress() {
    var scroll = scrollPosition / (scrollHeight - innerHeight); // const scroll_color = 'rgba(255, 0, 0, 1)';

    var scroll_color = 'rgba(231, 193, 87, .6)';
    progress.style.setProperty('--scroll-position', scroll);
    progress.style.setProperty('--scroll-color', scroll_color);
  }

  function handler_scroll_adjust_page() {
    if (innerWidth > 640) {
      var delay = 2000;
      clearTimeout(timeout);
      timeout = setTimeout(adjustScroll, delay);
    }
  }

  function adjustScroll() {
    if (scrollPosition > 0 && scrollPosition < innerHeight / 2) {
      scrollTo(fixScrollTop(), 0, 600);
    } else if (scrollPosition > innerHeight / 2 && scrollPosition < innerHeight) {
      scrollTo(fixScrollTop(), innerHeight, 600); // scrollTo(fixScrollTop(), 0, 600);
    }
  }

  function handler_scroll_menu_open() {
    if (containsClass(sidebar, 'open')) {
      sidebar.style.visibility = 'hidden';
      sidebar.style.zIndex = 10;
      overlay.style.display = 'none';
      removeClass('.sidebar', 'open');
    }
  }

  function handler_scroll_menu_current() {
    var sections = document.querySelectorAll('.section');
    removeClass('.sidebar .menu ul li', 'current');

    for (var i = 0; i < sections.length; ++i) {
      if (isVisible(sections[i])) {
        // removeClass('.sidebar .menu ul li', 'current');
        var id = sections[i].id;
        var links = document.querySelectorAll("[href=\"#".concat(id, "\"]"));

        for (var j = 0; j < links.length; ++j) {
          links[j].closest('li').classList.add('current');
        }
      }
    }

    function isVisible(element) {
      var _getBoundingBox = getBoundingBox(element),
          top = _getBoundingBox.top,
          bottom = _getBoundingBox.bottom; // return (
      //   (top > 0 || bottom > 0) &&
      //   top < innerHeight
      // );


      return (top > 0 || bottom > 0) && top < innerHeight / 2 && bottom > innerHeight / 2;
    }
  }

  function handler_resize() {
    var width = window.innerWidth;

    if (width > 960) {
      sidebar.style.visibility = 'visible';
    } else {
      sidebar.style.visibility = 'hidden';
      sidebar.style.zIndex = 10;
      overlay.style.display = 'none';
      removeClass('.ccc', 'open');
    }
  }

  function handler_click() {
    if (containsClass(sidebar, 'open')) {
      sidebar.style.visibility = 'hidden';
      sidebar.style.zIndex = 10;
      overlay.style.display = 'none';
      removeClass('.sidebar', 'open');
    } else {
      sidebar.style.visibility = 'visible';
      sidebar.style.zIndex = 1111;
      overlay.style.display = 'block';
      addClass('.sidebar', 'open');
    }
  } // scroll event callback
  // only updates scroll position


  function onScroll() {
    scrollPosition = getScrollY();
    event = 'scroll';
    requestTick();
  } // resize event callback
  // only updates window dimensions


  function onResize() {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
    event = 'resize';
    requestTick();
  } // click event callback
  // nothing to update


  function onClick() {
    event = 'click';
    requestTick();
  } // calls rAF only when a call isn't already in the queue


  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(handler);
      ticking = true;
    }
  } // animation handler
  // resource intensive code, i.e. dom reflow and painting, goes here


  function handler() {
    // allow further rAFs to be called
    ticking = false; // code, or else call other functions?

    switch (event) {
      case 'scroll':
        handler_scroll_progress();
        handler_scroll_adjust_page();
        handler_scroll_menu_open();
        handler_scroll_menu_current();
        break;

      case 'resize':
        handler_resize();
        break;

      case 'click':
        handler_click();
        break;

      default: // console.log('unknown event');

    }
  }

  window.addEventListener('scroll', onScroll, false);
  window.addEventListener('resize', onResize, false); // just call handler_onclick

  responsive.addEventListener('click', onClick, false);
} // CURRENT PAGE


function currentPage() {
  var defaultPage = 'blog'; // const index = window.location.href.lastIndexOf('/') + 1;
  // let current = window.location.href.slice(index);
  // const hash = window.location.hash;

  var pathname = window.location.pathname.slice(1);
  var current = pathname; // in case we accessed location.host without a path

  if (!current) {
    current = defaultPage;
  }

  var links = document.querySelectorAll('[href*="' + current + '"]');

  for (var i = 0; i < links.length; ++i) {
    links[i].closest('li').classList.add('current');
  }
} // // https://stackoverflow.com/questions/3659072/how-to-disable-anchor-jump-when-loading-a-page/3659116#3659116
// // https://stackoverflow.com/questions/27096621/how-to-disable-anchor-jump-when-loading-a-page/29823834#29823834
// // DELAY SCROLL TO HASH
// function hashJumpDelay() {
//   const link = document.getElementById(target);
//   console.log(link.offsetTop);
//   const innerHeight = window.innerHeight;
//   console.log(innerHeight);
//   if (target) {
//     console.log(target);
//     setTimeout(() => {
//       scrollTo(document.body, link.offsetTop + innerHeight, 600);
//       window.location.hash = `#${target}`;
//     }, 1200);
//   }
// }
// EXTERNAL LINKS


function external() {
  var internal = new RegExp('^((f|ht)tps?:)?(//)?(' + window.location.host + ')');
  var links = document.getElementsByTagName('a');

  for (var i = links.length - 1; i >= 0; --i) {
    if (!internal.test(links[i].host)) {
      links[i].target = '_blank';
    }
  }
} // VISIBILITY


function visibility() {
  var toggle = document.getElementById('toggle');
  var update = document.getElementById('update');

  if (toggle === null || update === null) {
    return;
  }

  toggle.addEventListener('click', function () {
    if (update.style.display === 'block') {
      update.style.display = 'none';
    } else {
      update.style.display = 'block';
    }
  });
} // function splash() {
//   const start = document.querySelector('.start-overlay');
//   start.style.display = 'block';
//   function fade() {
//     start.style.display = 'none';
//     clearTimeout(timeout);
//   }
//   const timeout = setTimeout(fade, 2000);
//   start.addEventListener('click', () => {
//     start.style.display = 'none';
//   });
// }
// http://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery


function initScroll() {
  var links = document.querySelectorAll('[href^="#"]');

  for (var i = links.length - 1; i >= 0; --i) {
    links[i].addEventListener('click', willScrollTo, false);
  }
}

function scrollTo(element, to, duration) {
  if (duration <= 0) {
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;

    if (element.scrollTop === to) {
      return;
    }

    scrollTo(element, to, duration - 10);
  }, 10);
}

function willScrollTo(e) {
  e.preventDefault();
  var innerHeight = window.innerHeight;
  var element = e.target;
  var parsed = element.getAttribute('href').replace('#', '');
  var link = document.getElementById(parsed); // TODO why does the scroll to top of page need adjustment?

  var to = parsed === 'banner' ? link.offsetTop : link.offsetTop + innerHeight; // scrollTo(document.body, link.offsetTop, 600);

  scrollTo(fixScrollTop(), to, 600);
} // https://dev.opera.com/articles/fixing-the-scrolltop-bug/


function fixScrollTop() {
  if ('scrollingElement' in document) {
    return document.scrollingElement;
  }

  if (navigator.userAgent.indexOf('WebKit') !== -1) {
    return document.body;
  }

  return document.documentElement;
}