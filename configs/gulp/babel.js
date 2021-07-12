'use strict';


const pkg = require('../../package.json');
const path = require('path');


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

    const stream = gulp
      .src([
        './src/assets/js/{common,lib}/**/*.js',
        '!./src/assets/js/{common,lib}/**/_*.js'
      ], {
        base: './src/assets/'
      })

      .pipe(plugins.babel({
        presets: ['@babel/preset-env'],
        comments: true
      }))

      .pipe(gulp.dest(path.join(output)))
      // uglify

      .pipe(plugins.uglify({
        compress: true,
        mangle: true,
        output: {
          beautify: false,
          indent_level: 2,
          comments: false
        }
      }))

      .pipe(plugins.rename({
        extname: '.min.js'
      }))

      .pipe(gulp.dest(path.join(output)));

    return stream;

  };
};
