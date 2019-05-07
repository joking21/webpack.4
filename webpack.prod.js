const webpack = require('webpack');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    // stats: 'errors-only',  //  是否有显示文字输出
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false,
                    warnings: false,
                    drop_console: false,
                },
                sourceMap: true
            }),
        ]
    },
});