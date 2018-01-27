const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')


app.use(bodyParser())
app.use(router.routes(), router.allowedMethods())

// response
app.on('error',(err, ctx) => {
  console.log(err)
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
