const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    port: 9090,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}