/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      comments: false,
      sourceMap: true
    })
  ]
};
