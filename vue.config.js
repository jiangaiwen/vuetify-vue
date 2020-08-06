const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  "publicPath": "/",
  "outputDir": "dist",
  "assetsDir": "static",
  "lintOnSave": false,
  "productionSourceMap": false,
  "devServer": {
    "open": true,
    "host": "0.0.0.0",
    "port": 8080
  },
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('components', resolve('src/components'));
  },
  "transpileDependencies": [
    "vuetify"
  ]
}