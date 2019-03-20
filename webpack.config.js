const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT = path.resolve('./')
const webpack = require('webpack')

module.exports =  {
  mode: 'development',
  entry: {
    index: [
      path.join(ROOT, 'index.tsx'),
    ]
  },
  output: {
    path: path.join(ROOT, 'build'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: path.join(ROOT, 'index.ejs'),
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}