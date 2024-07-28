const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
      output: {
          libraryTarget: "system",
      },
      plugins: [
        new DefinePlugin({
          '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true)
        })
      ]
  },
});
