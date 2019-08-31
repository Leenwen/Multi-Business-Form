const path = require('path');
const root = path.resolve(__dirname, '..');// 项目的根目录绝对路径
var babelLoaderConf = require('./babel-conf');
var vueLoaderConf = require('./vue-loader-conf');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(root, 'src/index.js'),  // 入口文件路径
  output: {
    path: path.join(root, 'dist'),  // 出口目录
    filename: 'main.js'  // 出口文件名
  },
  resolve: {
    // require时省略的扩展名，遇到.vue结尾的也要去加载
    extensions: ['.js', '.vue'],
    // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
    alias: {
      vue: 'vue/dist/vue.esm.js',
      'componentDir': path.join(root, 'src/component/form-item-components'),
      'lib': path.join(root, 'src/lib'),
      'config':path.join(root,'src/config'),
    }
  },
  module: {
    rules: [
      {
        test : /\.css$/,
        use : ['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: babelLoaderConf
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: vueLoaderConf
      },
      {
        test: /\.(tpl|html|htm|shtml)$/,
        use: ['html-loader']
      },
      {
　　　　 test: /\.(png|jpg|gif)$/,
　　　　 use:['url-loader?limit=8192']
　　   },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      },
    ]
  },
  plugins: [new VueLoaderPlugin()]
};