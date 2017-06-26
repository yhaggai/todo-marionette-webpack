const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const VENDOR_LIBS = [
  'backbone',
  'backbone.marionette',
  'backbone.localstorage',
  'jquery'
];
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
  resolve: {
    modules: ['./node_modules', __dirname]
  },
  devServer: {
    hot: true,
    port: 3001,
    compress: true,
    watchContentBase: false,
    contentBase: path.join(__dirname, 'dist')
  },
  entry: {
    app: './app/init.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        test: /\.less$/
      },
      {
        test: /\.((jade)|(pug))$/,
        use: ['pug-loader']
      }
    ]
  },
  plugins: [
    require('autoprefixer'),
    new webpack.SourceMapDevToolPlugin({
      test: [/\.js$/, /\.jsx$/],
      exclude: [/^vendor\./],
      filename: 'app.[hash].js.map',
      append: '//# sourceMappingURL=[url]',
      moduleFilenameTemplate: '[resource-path]',
      fallbackModuleFilenameTemplate: '[resource-path]'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),
    new HtmlWebpackPlugin({
      template: 'app/index.jade',
      hash: true,
      minify: { collapseWhitespace: true }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
