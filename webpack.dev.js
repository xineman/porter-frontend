const merge = require('webpack-merge');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

const {
  NODE_MODULES_PATH,
  DIST_PATH
} = require('./config/paths');
const {
  cssLoader,
  sassLoader,
  postcssLoader
} = require('./config/loaders');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        oneOf: [
          {
            resource: /global/,
            use: [
              'style-loader',
              'css-loader',
              postcssLoader,
              sassLoader
            ]
          },
          {
            use: [
              'style-loader',
              cssLoader,
              postcssLoader,
              sassLoader
            ]
          }
        ]
      }
    ]
  },

  output: {
    path: DIST_PATH,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  devServer: {
    hot: true,
    port: 3000,
    inline: true,
    host: 'localhost',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    compress: true,
    watchOptions: {
      ignored: NODE_MODULES_PATH
    }
  },
  plugins: [
    new HotModuleReplacementPlugin(),

    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new Dotenv({
      path: './.staging.env'
    })
  ]
});
