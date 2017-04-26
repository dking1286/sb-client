/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-saga',
      'redux-stack',
      'prop-types',
      'axios',
      '@blueprintjs/core'
    ],
    bundle: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'dist')
  },
  resolve: {
    modules: [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'node_modules')
    ]
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
          'css-loader?module',
          'sass-loader'
        ]
      },
      {
        test: /.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Careeer Role Finder',
      template: path.join(__dirname, '..', 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
