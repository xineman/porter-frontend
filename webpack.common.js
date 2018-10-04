const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  APP_PATH,
  NODE_MODULES_PATH,
  ASSETS_PATH
} = require('./config/paths');
const {
  alias
} = require('./config/alias');
const {
  imagesLoader
} = require('./config/loaders');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(APP_PATH, 'index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: NODE_MODULES_PATH,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        include: [
          ASSETS_PATH
        ],
        use: [
          imagesLoader
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss'
    ],
    alias
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/template.html'
    })
  ]
};
