const Koa        = require('koa')
const app        = new Koa()
const mongoose   = require('mongoose')

const router     = require('./router')
const config     = require('./config')
const middleware = require('./middlewares')

// 注册中间件
middleware(app)

// 注入路由
router(app)

const dbConfig = config[process.env.NODE_ENV || 'development'];

mongoose.connect(dbConfig.mongo.uri);

// 连接成功 
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + dbConfig.mongo.uri);
});

// 连接失败
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
})

// 错误打印
app.on('error',(err, ctx) => {
  console.log(err)
})

app.listen(dbConfig.port, () => {
  console.log(`listening on ${dbConfig.port}`)
})
