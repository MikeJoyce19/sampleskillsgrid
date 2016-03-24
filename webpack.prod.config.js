var webpack = require('webpack');
var webpackDev = require('./webpack.dev.config');

//remove any devtool config, including source maps which bloat the bundle
delete webpackDev.devtool;


var prodConfig = {
    entry: [
        './src/main.jsx'
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '\'production\''
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = Object.assign({}, webpackDev, prodConfig);

