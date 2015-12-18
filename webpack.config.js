var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        // SCSS files: http://stackoverflow.com/questions/29210325/webpack-sass-where-is-the-css-file
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: __dirname,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file'
        }]
    }
};
