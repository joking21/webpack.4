const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": require('./config/dev.env.js')
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        contentBase: './dist',
        compress: true,
        hot: true,
        port: 9000,
        stats: 'errors-only',  //只在发生错误时输出
        // host: "0.0.0.0",    // 若希望服务器外部可以访问则是0.0.0.0，默认localhost
        proxy: {
            '/dw': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/dw': '/api'
                }
            }
        },
    },
});
