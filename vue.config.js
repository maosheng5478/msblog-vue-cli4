// vue.config.js
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩(可选)

module.exports = {
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  chainWebpack: config => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'));
  },
  configureWebpack: config => {
    // 开启 gzip 压缩
    // 需要 npm i -D compression-webpack-plugin
    const plugins = [];
    plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 1024,
        minRatio: 0.8
      })
    );
    config.plugins = [...config.plugins, ...plugins];
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: 5478, // 启动端口
    open: true, // 启动后是否自动打开网页
    https: false,
    proxy: {
      '/api': { // '/back-stsem-php-api' 可以自己修改
        target: 'http://127.0.0.1:8080', // 接口域名
        changeOrigin: true, // 是否跨域
        secure: false,
        pathRewrite: {
          '^/api': '' // 需要rewrite重写的,
        }
      }
    }
  }
};
