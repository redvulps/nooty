const commonConfig = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  output: {
    filename: 'nooty-editor.module.js',
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true,
  },
});
