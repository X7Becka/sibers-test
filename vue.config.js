module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/mixins.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sibers-test/'
    : '/'
};
