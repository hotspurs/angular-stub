'use strict';

const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: path.resolve(__dirname, 'src/app/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'build.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.jade$/,
        include: path.resolve(__dirname, 'src/app'), 
        loader: 'raw!jade-html' 
      },
      {
        test: /\.jade$/,
        include: path.resolve(__dirname, 'src/templates'),
        loader: 'jade'
      },
      { test: /\.styl$/, loader: 'style!css!stylus?resolve url' },
      { test: /\.(jpg|png|svg|eot|woff|woff2)$/, loader: 'file?name=[path][name].[ext]'},
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate!babel',
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.jade'),
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: '/',
    port: 3000,
  },
};

module.exports = config;
