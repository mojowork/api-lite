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

    // // 文章模块api
    // .post('/api/article/create', articlectrl.create)                // 发布文章
    // .get('/api/article/detail', articlectrl.detail)                 // 获取文章详情          
    // .put('/api/article/put', articlectrl.put)                       // 编辑文章
    // .delete('/api/article/del', articlectrl.del)                    // 删除文章
    // .post('/api/article/praise', articlectrl.praise)                // 点赞文章
    // .post('/api/article/comments', articlectrl.comments)            // 发布评论
    // .delete('/api/article/del_comments', articlectrl.del_comments)  // 删除评论

module.exports = router;