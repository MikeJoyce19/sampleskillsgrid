var path = require('path');
var webpack = require('webpack');

var babelSettings = {
    cacheDirectory: true,
    presets: ['es2015', 'stage-0', 'react']
};

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],//, 'Chrome'],
        coverageReporter: {
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'lcovonly', subdir: '.'}
            ]
        },
        files: [
            'spec.webpack.js'
        ],
        frameworks: [
            'jasmine'
        ],
        preprocessors: {
            'spec.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'coverage'],
        webpack: {
            cache: true,
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            devtool: 'inline-source-map',
            module: {
                preLoaders: [
                    {
                        test: /\.spec\.jsx?$/,
                        include: /spec/,
                        exclude: /node_modules/,
                        loader: 'babel',
                        query: babelSettings
                    },
                    {
                        test: /\.jsx?$/,
                        include: /src/,
                        exclude: /(node_modules|spec)/,
                        loader: 'babel-istanbul',
                        query: babelSettings
                    }
                ],
                loaders: [
                    {
                        test: /\.jsx?$/,
                        include: path.resolve(__dirname, '../src'),
                        exclude: /(node_modules|spec)/,
                        loader: 'babel-istanbul',
                        query: babelSettings
                    }
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    React: 'react'
                })
            ]
        },
        webpackServer: {
            noInfo: true
        }
    })
}