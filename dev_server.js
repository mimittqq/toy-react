const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config')
const webpack = require('webpack');
const server = new WebpackDevServer(webpack(webpackConfig));

server.listen(1234, '0.0.0.0', () => {

})