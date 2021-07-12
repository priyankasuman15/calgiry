'use strict';


const pkg = require('../../package.json');
const path = require('path');
const merge = require('merge-stream');


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

    // hapi
    const stream = gulp
      .src(['./src/hapi/**/*', '!./src/hapi/**/_*'], {
        base: './src/'
      })
      .pipe(gulp.dest(output));

    return stream;

  };
};
