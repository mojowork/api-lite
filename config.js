module.exports = {

    // 开发环境配置
    development: {
        mongo: {
            uri: 'mongodb://localhost:27017/forum'
        },
        port: '3000'
    },

    // 生产环境配置
    production: {
        mongo: {
            uri: 'mongodb://localhost:27017/forum'
        },
        port: '3000'
    }
}