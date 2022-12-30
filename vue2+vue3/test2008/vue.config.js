const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false,//暂时关闭代码检测
  //配置反向代理，
  devServer: {
    proxy: {
      '/api': {
        target: 'https://i.maoyan.com',
        changeOrigin: true
      },
      '/lcc': {
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          "/lcc": ''
        }
      }

    }
  }
}

