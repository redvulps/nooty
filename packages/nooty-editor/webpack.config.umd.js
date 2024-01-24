const commonConfig = require('./webpack.config.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  output: {
    filename: 'nooty-editor.umd.js',
    libraryTarget: 'umd',
    library: 'nooty-editor',
    umdNamedDefine: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
