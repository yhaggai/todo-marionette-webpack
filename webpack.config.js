var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractHtml = new ExtractTextPlugin('[name].html');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const VENDOR_LIBS = ['backbone', 'backbone.marionette', 'jquery'];
module.exports = {
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },
  entry: {
    bundle: './app/init.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: ['env']
          }
        }
      },
      {
        use: ['style-loader', 'css-loader', 'less-loader'],
        test: /\.less$/
      },
      {
        test: /\.((jade)|(pug))$/,
        // use: ['html-loader','pug-html-loader']
        use: ['pug-loader']
        // use: ['html-loader','pug-html-loader?pretty&exports=false']
        // use: extractHtml.extract({
        //   loader: ['html-loader', 'pug-html-loader?pretty&exports=false']
        // })
      }
    ]
  },
  plugins: [
    // extractHtml,
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.jade',
      minify: { collapseWhitespace: true }
    })
  ]
};
