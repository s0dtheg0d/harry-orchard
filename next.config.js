module.exports = {
    trailingSlash: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/harry-orchard/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/harry-orchard' : '',
  };