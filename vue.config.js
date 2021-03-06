const path = require("path")
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "views": "@/views",
                "network": "@/network",
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/assets/css/all.less")] // 引入全局样式变量
        }
    },
    devServer: {
        port: 9090
    }
}