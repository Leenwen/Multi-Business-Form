var webpack = require('webpack');
var merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = path.resolve(__dirname, '..');
module.exports = merge(baseConfig, {
    entry: [
        'webpack/hot/dev-server', // 热替换处理入口文件
        path.join(root, 'src/index.js')
    ],
    devServer: {
        historyApiFallback: true, // 404的页面会自动跳转到/页面
        inline: true, // 文件改变自动刷新页面
        progress: true, // 显示编译进度
        host:'127.0.0.1',
        port: 8889, // 服务器端口
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 添加热替换插件
        new HtmlWebpackPlugin({
            template: path.join(root, 'src/index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部
          })
    ]
});