const bodyParser = require('koa-bodyparser')

const myJson = require('./myJson')
const myLog = require('./myLog')

module.exports = (app) => {
    app.use(myLog())
    app.use(bodyParser())

    app.use(myJson())
}