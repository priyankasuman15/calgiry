'use strict';


const pkg = require('../../package.json');
const config = require('./gulp.config').autoprefixer;

const path = require('path');

const atimport = require('postcss-import');
const ifmedia = require('postcss-if-media'); //
const nested = require('postcss-nested');
const comments = require('postcss-discard-comments'); //
const presetenv = require('postcss-preset-env');
const sorter = require('css-declaration-sorter');
const ordered = require('postcss-ordered-values'); //
const perfectionist = require('perfectionist');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');


const paths = {
  src: pkg.directories.src,
  dist: pkg.directories.dist,
  assets: pkg.directories.assets,
  lib: pkg.directories.lib,
  test: pkg.directories.test
};

const output = path.join(paths.dist, paths.assets);




module.exports = function (gulp, plugins) {

  return function () {

    const base = [
      atimport(),
      ifmedia(), //
      nested(),
      comments({ //
        removeAll: false,
        removeAllButFirst: false
      }),
      presetenv({
        stage: 1,
        features: {
          'nesting-rules': false,
          'custom properties': false
        },
        autoprefixer: true,
        preserve: true
      }),
      sorter({
        order: 'smacss'
      }),
      ordered(), //
      perfectionist({
        cascade: true,
        colorCase: 'lower',
        colorShorthand: false,
        format: 'expanded',
        indentChar: ' ',
        indentSize: 4,
        trimLeadingZero: false,
        trimTrailingZeros: true,
        zeroLengthNoUnit: true,
        sourcemap: false
      })
    ];

    const purge = [
      purgecss({
        content: [
          './src/hapi/views/**/*.marko',
          './src/assets/js/**/*.js'
        ],
        // leaflet.css whitelisted
        whitelistPatterns: [/^leaflet/],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
    ];

    const minify = [
      cssnano({
        autoprefixer: false,
        discardComments: {
          removeAll: true
        },
        minifyFontValues: true,
        calc: {
          precision: 2
        },
        normalizeUrl: {
          normalizeProtocol: true,
          stripFragment: true,
          stripWWW: true
        }
      })
    ];

    const stream = gulp
      .src('./src/assets/css/postcss.css', {
        base: './src/assets/'
      })
      .pipe(plugins.postcss(base))
      // .pipe(plugins.sourcemaps.init({ loadMaps: false, identityMap: false, debug: false }))
      // .pipe(plugins.sourcemaps.write('./', { addComment: true, includeContent: true }))
      .pipe(plugins.rename({
        basename: 'styles',
        extname: '.css'
      }))
      .pipe(gulp.dest(output))

      // .pipe(plugins.postcss(purge))

      .pipe(plugins.postcss(minify))
      .pipe(plugins.rename({
        basename: 'styles.min',
        extname: '.css'
      }))
      .pipe(gulp.dest(output));

    return stream;

  };
};
