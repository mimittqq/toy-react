const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT = path.resolve('./')

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
    })
  ]
}