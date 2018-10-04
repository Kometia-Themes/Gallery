/*eslint-disable */
(function () {
  'use strict';
  const webpack = require('webpack');
  const path = require('path');
  const WebpackShellPlugin = require('webpack-shell-plugin');
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

  module.exports = {
    entry: {
      app: "./src/dev.js"
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "assets/[name].js",
      publicPath: "/assets/"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("css-loader!sass-loader")
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("css-loader!less-loader")
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("css-loader")
        }
      ]
    },
    externals: {
    },

    plugins: [
      new UglifyJSPlugin(),
      new CopyWebpackPlugin(
        [
          { from: "./src/php_files/index.php", to: "index.php" },
          { from: "./src/php_files/home.php", to: "home.php" },
          { from: "./src/images/", to: "images" },
          { from: "./src/assets/", to: "assets" }
        ],
        {
          ignore: [
            "*.scss",
            ".DS_Store",
            "base/*",
            "pages/*",
            "components/*.scss",
            "*.twig"
          ]
        },
        { copyUnmodified: true }
      ),
      new ExtractTextPlugin("assets/styles.css"),
      new WebpackShellPlugin({
        onBuildExit: ["node convert-twig-params.js --env=true"]
      })
    ]
  };
}());
/*eslint-enable */
