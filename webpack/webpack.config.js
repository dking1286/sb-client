const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const common = {
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
    filename: '[name].js',
    publicPath: '/'
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
      hash: true,
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
}

const envConfigPath = path.join(__dirname, `${process.env.NODE_ENV}.config.js`);

console.log(process.env.NODE_ENV);

if (!fs.existsSync(envConfigPath)) {
  console.log('Running common webpack config!');
  module.exports = common;
} else {
  console.log(`Running ${process.env.NODE_ENV} webpack config!`)
  module.exports = webpackMerge(common, require(envConfigPath));
}