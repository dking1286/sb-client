const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    vendor: [
      'angular'
    ],
    bundle: [
      './app'
    ],
    styles: [
      './app/styles/styles.scss'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Careeer Role Finder',
      template: path.join(__dirname, '..', 'app/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
