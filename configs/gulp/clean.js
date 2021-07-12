'use strict';


const pkg = require('../../package.json');
const path = require('path');
const del = require('del');


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

    return del(['./bin/**', './build/**', './dist/**', './lib/**']);

  };
};
