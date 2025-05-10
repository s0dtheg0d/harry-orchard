module.exports = {
    trailingSlash: true,
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/harry-orchard/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/harry-orchard' : '',
  };