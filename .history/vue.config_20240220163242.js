const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port: 7000,
    proxy:{
      "/api":{
        target: "htt"
      }
    }
  }
})
