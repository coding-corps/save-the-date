const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader");
  },
  pwa: {
    name: "coding_corps: code journal",
    themeColor: "#ffd100",
    icons: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/msapplication-icon-144x144.png",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/field-manuals/" : "/",
});
