const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue' : '/', // 打包部署后的基础访问路径，紧跟在 host 后面的值。一般来说，线上部署时，前端文件不会放在服务器根目录下，而是放在某个指定的路径下，然后通过这个路径进行访问
  outputDir: 'dist', // 打包文件的输出目录名
  assetsDir: 'assets', // 将打包后的静态资源文件存放在指定目录下
  configureWebpack: {
    // 这里面可以写针对 webpack 的配置信息，最终会通过 webpack-merge 合并到最终的配置中
    resolve: {
      alias: {
        // 设置文件路径快捷访问别名
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  },
}
