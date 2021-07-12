'use strict';


/*******************************
  Set-up
*******************************/

const gulp = require('gulp');
const path = require('path');


const plugins = require('gulp-load-plugins')({
  config: path.join(__dirname, 'package.json'),
  scope: ['devDependencies'],
  lazy: true,
  camelize: true,
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /^gulp(-|\.)/,
  scope: ['devDependencies'],
  rename: {
    'gulp-babel': 'babel',
    'gulp-postcss': 'postcss',
    'gulp-rename': 'rename',
    'gulp-replace': 'replace',
    'gulp-uglify': 'uglify'
  }
});




/*******************************
  Functions
*******************************/

function getTask(task) {

  return require('./configs/gulp/' + task)(gulp, plugins);
}


gulp.task('setDevelopment', (done) => {

  process.env.NODE_ENV = 'development';
  done();
});


gulp.task('setProduction', (done) => {

  process.env.NODE_ENV = 'production';
  done();
});




/*******************************
  Tasks
*******************************/

gulp.task('assets', getTask('assets'));
gulp.task('babel', getTask('babel'));
gulp.task('clean', getTask('clean'));
gulp.task('hapi', getTask('hapi'));
gulp.task('postcss', getTask('postcss'));
gulp.task('watch', getTask('watch'));


gulp.task('build', gulp.series('clean', 'postcss', 'assets', 'babel', 'hapi'), (done) => {

  done();
});


gulp.task('default', gulp.series('babel'));
