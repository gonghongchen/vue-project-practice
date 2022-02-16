const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const resolvePath = curPath => path.resolve(__dirname, curPath) // __dirname 是当前文件在系统环境下的完整路径，resolvePath 方法处理完后会得到一个系统环境下的完整路径
// console.log(__dirname) // 输出：E:\Mine\vue-project-practice
// console.log(resolvePath('src/')) // 输出：E:\Mine\vue-project-practice\src

module.exports = {
  publicPath: isProd ? '/vue-project-practice/' : '/', // 打包部署后的基础访问路径，紧跟在 host 后面的值。一般来说，线上部署时，前端文件不会放在服务器根目录下，而是放在某个指定的路径下，然后通过这个路径进行访问
  outputDir: 'docs', // 打包文件的输出目录名
  assetsDir: 'assets', // 将打包后的静态资源文件存放在指定目录下
  productionSourceMap: false, // 生产环境下屏蔽 source map
  configureWebpack: {
    // 这里面可以写针对 webpack 的配置信息，最终会通过 webpack-merge 合并到最终的配置中
    resolve: {
      alias: {
        // 设置文件路径快捷访问别名
        '@src': resolvePath('src/'),
        '@assets': resolvePath('src/assets'),
        '@components': resolvePath('src/components'),
        '@pages': resolvePath('src/pages'),
        '@router': resolvePath('src/router'),
      },
    },
  },
}
