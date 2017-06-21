var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractHtml = new ExtractTextPlugin('[name].html')

const VENDOR_LIBS = ["backbone","backbone.marionette", "jquery", "less", "lodash" ];
module.exports = {
  entry: {
    bundle: './app/init.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
    use: 'babel-loader',
    test: /\.js$/,
    exclude: /node_modules/,
  }, 
  {
    use: ['style-loader', 'css-loader', 'less-loader'],
    test: /\.less$/
  },
  {
    test: /\.((jade)|(pug))$/,
    use: [
        'html-loader', {
        loader: 'pug-html-loader',
          options: {
            doctype: 'html'
          }
        }
      ]
    }
]
  },
  plugins: [
    extractHtml,
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {collapseWhitespace: true}
    })
    ]
};