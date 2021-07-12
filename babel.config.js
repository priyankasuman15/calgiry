'use strict';


module.exports = function (api) {

  api.cache.forever();

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          chrome: '67',
          edge: '17',
          firefox: '60',
          ie: '11',
          safari: '11.1'
        },
        // esmodules: true,
        // modules: 'umd',
        modules: false,
        debug: false,
        useBuiltIns: 'usage'
      }
    ]
  ];

  const plugins = [];

  return {
    presets,
    plugins
  };

};
