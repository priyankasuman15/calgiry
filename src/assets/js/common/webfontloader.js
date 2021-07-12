'use strict';

/*
  global WebFont
*/


// comment out if loading ./dist via gulp workflow
// needed if loading ./dist/prod | ./dist/dev via webpack workflow
// var WebFont = require('../vendor/webfontloader-1.6.28');


const base = {
  // loading: function () { },
  // active: function () { },
  // inactive: function () { },
  // fontloading: function (familyName, fvd) { },
  // fontactive: function (familyName, fvd) { },
  // fontinactive: function (familyName, fvd) { },
  timeout: 3000
  // classes: false,
  // events: false
};

const google = {
  google: {
    families: ['Montserrat', 'Raleway', 'Roboto']
  }
};

const custom = {
  custom: {
    families: ['Raleway'],
    // families: ['Feather', 'Josefin Sans', 'Josefin Slab', 'Lato', 'Maven Pro', 'Montserrat', 'Noto Serif', 'Nunito Sans', 'Nunito', 'Open Sans Condensed', 'Open Sans', 'Quicksand', 'Raleway', 'Roboto Condensed', 'Roboto Mono', 'Roboto Slab', 'Roboto', 'Ubuntu Condensed', 'Ubuntu Mono', 'Ubuntu', 'Varela Round', 'Varela'],
    urls: [
      // './css/vendor/feather-1.1.css',
      // './css/fonts/josefin-sans.css',
      // './css/fonts/josefin-slab.css',
      // './css/fonts/lato.css',
      // './css/fonts/maven-pro.css',
      // './css/fonts/montserrat.css',
      // './css/fonts/noto-serif.css',
      // './css/fonts/nunito-sans.css',
      // './css/fonts/nunito.css',
      // './css/fonts/open-sans-condensed.css',
      // './css/fonts/open-sans.css',
      // './css/fonts/quicksand.css',
      './css/fonts/raleway.css'
      // './css/fonts/roboto-condensed.css',
      // './css/fonts/roboto-mono.css',
      // './css/fonts/roboto-slab.css',
      // './css/fonts/roboto.css',
      // './css/fonts/ubuntu-condensed.css',
      // './css/fonts/ubuntu-mono.css',
      // './css/fonts/ubuntu.css',
      // './css/fonts/varela-round.css',
      // './css/fonts/varela.css'
    ]
  }
};


WebFont.load(
  custom // custom (no need to link css from index.html)
  // google // google (link css from index.html, but css does not need font-face defs)
);
