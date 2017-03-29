const webpack = require('webpack');
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
    path: path.join(__dirname, 'dist'),
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    })
  ]
}