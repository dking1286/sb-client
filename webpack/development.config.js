/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    port: 9090,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
