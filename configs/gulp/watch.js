'use strict';


const pkg = require('../../package.json');
const path = require('path');
const merge = require('merge-stream');
const config = require('./gulp.config').browsersync.development;
const browsersync = require('browser-sync').create();

const paths = {
  src: pkg.directories.src,
  dist: pkg.directories.dist,
  assets: pkg.directories.assets,
  lib: pkg.directories.lib,
  test: pkg.directories.test
};

const output = path.join(paths.dist);




module.exports = function (gulp, plugins) {

  return function () {

    browsersync.init({
      host: config.host,
      proxy: config.proxy,
      reloadDelay: config.reloadDelay,
      injectChanges: config.injectChanges,
      browser: config.browser,
      reloadOnRestart: config.reloadOnRestart,
      files: config.files,
      open: config.open,
      notify: config.notify,
      logLevel: config.logLevel,
      logConnections: config.logConnections,
      logFileChanges: config.logFileChanges
    });


    return gulp.watch(['./src/assets/js/**/*'], gulp.parallel('babel')).on('change', (event) => {

      browsersync.reload;
    });

  };
};
