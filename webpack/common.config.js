/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('config');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-addons-css-transition-group',
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
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?module',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webm|ico)$/,
        use: ['file-loader']
      },
      {
        test: /\.[ot]tf$/,
        use: ['url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]']
      },
      {
        test: /\.woff$/,
        use: ['url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]']
      },
      {
        test: /\.woff2$/,
        use: ['url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]']
      },
      {
        test: /\.eot$/,
        use: ['url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]']
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config)
    })
  ]
};
