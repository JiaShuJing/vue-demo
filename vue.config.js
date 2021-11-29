module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === "test") {
      config.devtool("eval");
      config.module
        .rule("istanbul")
        .test(/\.(js|ts)$/)
        .use("istanbul-instrumenter-loader")
        .loader("istanbul-instrumenter-loader")
        // .before('babel-loader')
        .options({
          esModules: true
        });
    }
  },
  //vue-cli3.0 里面的 vue.config.js做配置
  devServer: {
    proxy: {
      "/coverage": {
        target: "http://localhost:8888", // 后台接口域名
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true //是否跨域
        // pathRewrite: {
        // }
      }
    }
  }
};
