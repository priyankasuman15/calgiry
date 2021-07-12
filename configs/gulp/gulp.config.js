'use strict';


const pkg = require('../../package.json');
const path = require('path');


const paths = {
  src: pkg.directories.src,
  dist: pkg.directories.dist,
  lib: pkg.directories.lib,
  test: pkg.directories.test,
  assets: pkg.directories.assets,
  build: ''
};

const src = {
  base: path.join(paths.src, paths.build),
  html: path.join(paths.src, paths.build),
  php: path.join(paths.src, paths.build),
  js: path.join(paths.src, paths.build, paths.assets, 'js'),
  es6: path.join(paths.src, paths.build, paths.assets, 'es6'),
  css: path.join(paths.src, paths.build, paths.assets, 'css'),
  img: path.join(paths.src, paths.build, paths.assets, 'img'),
  fonts: path.join(paths.src, paths.build, paths.assets, 'fonts'),
  json: path.join(paths.src, paths.build, paths.assets, 'json'),
  svg: path.join(paths.src, paths.build, paths.assets, 'svg')
};

const dist = {
  base: path.join(paths.dist, paths.build),
  html: path.join(paths.dist, paths.build),
  php: path.join(paths.dist, paths.build),
  js: path.join(paths.dist, paths.build, paths.assets, 'js'),
  es6: path.join(paths.dist, paths.build, paths.assets, 'es6'),
  css: path.join(paths.dist, paths.build, paths.assets, 'css'),
  img: path.join(paths.dist, paths.build, paths.assets, 'img'),
  fonts: path.join(paths.dist, paths.build, paths.assets, 'fonts'),
  json: path.join(paths.dist, paths.build, paths.assets, 'json'),
  svg: path.join(paths.dist, paths.build, paths.assets, 'svg')
};


module.exports = {
  autoprefixer: {
    browsers: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    latest: [
      '> 1%',
      'last 1 version',
      'ie 10'
    ],
    default: [
      '> 0.5%',
      'last 2 versions',
      'Firefox ESR',
      'not dead'
    ]
  },
  browsersync: {
    development: {
      ui: {
        port: 3001
      },
      host: '192.168.1.16',
      proxy: '192.168.1.16:8080',
      port: 3000,
      reloadDelay: 1000,
      injectChanges: true,
      logLevel: 'info',
      logConnections: true,
      logFileChanges: true,
      browser: ['google chrome', 'safari', 'firefox'],
      reloadOnRestart: true,
      open: true,
      notify: false,
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
      },
      files: [
        path.join(src.html, '**/*.html'),
        path.join(src.js, '/**/*.js'),
        path.join(src.css, '/**/*.css')
      ]
    }
  }
};
