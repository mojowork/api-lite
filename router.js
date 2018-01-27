const Router = require('koa-router')
const router = Router({
    prefix: '/api'
})
const userCtrl = require('./controllers/users.controller')

router
    //  用户模块api
    .post('/user/login', userCtrl.login)                        // 用户登录
    .post('/user/register', userCtrl.register)                  // 用户注册      
    .put('/user/update', userCtrl.update)                       // 更改用户资料
    .put('/user/resetpwd', userCtrl.resetpwd)                   // 重置用户密码
    .delete('/user/deluser', userCtrl.deluser)                  // 删除用户


module.exports = (app) => {
    app.use(router.routes(), 
            router.allowedMethods())
}