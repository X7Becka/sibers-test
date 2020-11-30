module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/mixins.scss";`
      }
    }
  }
};
