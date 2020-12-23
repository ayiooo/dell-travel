const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // @代表 src 路径
        views: '@/views',
        network: '@/network',
        utils: '@/utils',
        cm: '@/components/common',
        ct: '@/components/content',
        assets: '@/assets'
      }
    }
  },
  devServer: {
    // 假数据用的文件夹
    contentBase: [path.resolve(__dirname, 'static')]
    // 如果自己建了服务器，可以使用 proxy 进行转发
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3001'
    //   }
    // }
  }
}
