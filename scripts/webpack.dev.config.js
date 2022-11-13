const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require('./webpack.base.config');

const devMode = process.env.NODE_ENV !== 'production';
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const webpackConfigDev = {
  mode: 'development',

  entry: {
    app: [resolve('../src/index.js')],
  },

  output: {
    path: resolve('../lib'),
    filename: 'change-button.js',
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: resolve('../lib'),
    hot: true,
    open: true,
    host: 'localhost',
    port: 8888,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({ template: './public/index.html', }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx']
  },
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
