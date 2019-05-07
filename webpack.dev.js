const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        contentBase: './dist',
        compress: true,
        hot: true,
        port: 9000,
        stats: 'errors-only',  //只在发生错误时输出
        // host: "0.0.0.0",    // 若希望服务器外部可以访问则是0.0.0.0，默认localhost
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^requires': ''
                }
            }
        },
    },
});
