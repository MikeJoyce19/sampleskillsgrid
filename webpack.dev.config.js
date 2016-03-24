var path = require('path');
var webpack = require('webpack');

var babelSettings = {
    cacheDirectory: true,
    presets: ['es2015', 'stage-0', 'react']
};

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/main.jsx'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        contentPath: '/',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, include: path.join(__dirname, 'src'), loader: 'babel', query: babelSettings}
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: './dist/index.html'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '\'development\''
            }
        })
    ]
};