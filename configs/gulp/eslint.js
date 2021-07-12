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

    function isWarning(message) {

      return message.severity === 1;
    }

    const stream = gulp
      .src(['./src/assets/js/common/utils.js', /*'./src/server.js',*/ '!node_modules/**'])
      .pipe(plugins.eslint({
        'extends': [
          // 'eslint:recommended'
          './.eslintrc.js'
        ],
        rules: {
          // 'strict': [1, 'global'],
          // 'indent': [1, 2, {'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3}, 'SwitchCase': 1}],
          // 'quotes': [1, 'single', 'avoid-escape'],
          // 'semi': [1, 'always']
        },
        globals: [],
        envs: [
          'browser',
          'node',
          'es6'
        ]
      }))

      .pipe(plugins.eslint.results((results) => {

        console.log(`Total Results: ${results.length}`);
        console.log(`Total Warnings: ${results.warningCount}`);
        console.log(`Total Errors: ${results.errorCount}`);
      }))

      .pipe(plugins.eslint.formatEach('compact', process.stderr))
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());

    return stream;

  };
};
