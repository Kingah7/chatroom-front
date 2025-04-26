const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: gs,
  devServer:{
    port: 7000,
    proxy:{
      "/api":{
        target: "http://127.0.0.1:8888",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api" : ""
        }
      }
    }
  }
})
