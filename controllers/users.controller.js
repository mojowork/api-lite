const mongoose  = require('mongoose')
const md5       = require('md5')
const UserModel = require('../models/users.model')


class UserController {

    // 用户注册
    static async register(ctx) {
        // await ……
        ctx.body = 'register'
    }

    // 用户登录
    static async login(ctx) {
        // await ……
        ctx.body = 'login'
    }

    // 用户退出
    static async logout(ctx) {
        // await ……
        ctx.body = 'logout'
    }

    // 更新用户资料
    static async update(ctx) {
        // await ……
        ctx.body = 'update'
    }

    // 删除用户
    static async deluser(ctx) {
        // await ……
        ctx.body = 'deluser'
    }

    // 重置密码
    static async resetpwd(ctx) {
        // await ……
        ctx.body = 'resetpwd'
    }
}
module.exports = UserController

