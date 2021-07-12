'use strict';


// https://minimalanalytics.com


(function (a, b, c) {

  const d = function (l) {

    let n;
    let o;
    const m = window.location.search.substring(1);

    const q = m.split('&');

    for (n = 0; n < q.length; n++) {
      if (o = q[n].split('='), o[0] === l) {
        return o[1] || void 0;
      }
    }
  };


  const e = function () {

    return '_' + Math.random().toString(36).substr(2, 9);
  };


  const f = function () {

    return localStorage.cid || (localStorage.cid = e()), localStorage.cid;
  };


  const g = function (l) {

    const m = [];
    for (const n in l) {
      l.hasOwnProperty(n) && void 0 !== l[n] &&
      m.push(encodeURIComponent(n) + '=' + encodeURIComponent(l[n]));
    }

    return m.join('&');
  };


  const j = function () {

    setTimeout(() => {

      const m = {
        v: '1',
        aip: c.anonymizeIp ? 1 : void 0,
        tid: b,
        cid: f(),
        t: 'pageview',
        sd: c.colorDepth && screen.colorDepth ? screen.colorDepth + '-bits' : void 0,
        dr: d('ref'), dt: document.title, dl: document.location.origin + document.location.pathname + document.location.search,
        ul: c.language ? (navigator.language || '').toLowerCase() : void 0,
        de: c.characterSet ? document.characterSet : void 0,
        sr: c.screenSize ? (window.screen || {}).width + 'x' + (window.screen || {}).height : void 0,
        vp: c.screenSize && window.visualViewport ? (window.visualViewport || {}).width + 'x' + (window.visualViewport || {}).height : void 0
      };

      const l = new XMLHttpRequest();
      l.open('GET', 'https://www.google-analytics.com/collect?' + g(m) + '&z=' + Math.random(), !0),
      l.send(null);
    }, 10);
  };

  const k = a.pushState;


  a.pushState = function (l) {

    return typeof a.onpushstate === 'function' && a.onpushstate({ state: l }), j(), k.apply(a, arguments);
  }, j();

})(window.history, 'XX-XXXXXXXXX-X', { anonymizeIp: true, colorDepth: true, characterSet: true, screenSize: true, language: true });
