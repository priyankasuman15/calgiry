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

const output = path.join(paths.dist, paths.assets);




module.exports = function (gulp, plugins) {

  return function () {

    // js vendor
    const vendor = gulp
      .src(['./src/assets/js/vendor/**/*.*', '!./src/assets/js/vendor/**/_*.*'], {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // css
    const css = gulp
      .src(['./src/assets/css/fonts/**/raleway.*', './src/assets/css/vendor/**/*.*'], {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // fonts
    const fonts = gulp
      .src('./src/assets/fonts/raleway/*.*', {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // img
    const img = gulp
      .src('./src/assets/img/**/*.*', {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // json
    const json = gulp
      .src('./src/assets/json/**/*.*', {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // ics
    const ics = gulp
      .src('./src/assets/ics/**/*.*', {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // svg
    const svg = gulp
      .src(['./src/assets/svg/**/*.*'], {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // logs
    const logs = gulp
      .src('./src/logs/', {
        base: './src/'
      })
      .pipe(gulp.dest(paths.dist));

    // pgn
    const pgn = gulp
      .src('./src/assets/pgn/**/*.*', {
        base: './src/assets/'
      })
      .pipe(gulp.dest(output));

    // chesskit
    const chesskit = gulp
      .src('./src/chesskit/**/*.*', {
        base: './src/'
      })
      .pipe(gulp.dest(output));

    // downloads
    const downloads = gulp
      .src('./src/downloads/**/*.*', {
        base: './src/'
      })
      .pipe(gulp.dest(output));

    // uploads
    const uploads = gulp
      .src(['./src/uploads/'], {
        base: './src/',
        allowEmpty: true
      })
      .pipe(gulp.dest(paths.dist));

    const merged = merge(vendor, css, fonts, img, json, svg, ics, logs, downloads, uploads, chesskit, pgn);
    return merged;

  };
};
