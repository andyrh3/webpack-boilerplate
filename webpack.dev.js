const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', //unpacks the JS for debugging
    devServer: {
        publicPath: "/",
        contentBase: './dist',
        host: 'localhost',
        port: 9003
    },
});
