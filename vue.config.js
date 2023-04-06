// 重新配置完要记得重启
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bang.360.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo': {
        target: 'https://www.qyer.com',
        changeOrigin: true,
        pathRewrite: {
          '^/foo': ''
        }
      }
    }
  }
})
