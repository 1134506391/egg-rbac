'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        await this.ctx.render('admin')

    }
    async register() {
        const roleList = await this.ctx.service.role.findAll();
        await this.ctx.render('login/register', {
            roleList
        })
    }
    async doRegister() {
        let newUser = this.ctx.request.body;
        await this.ctx.service.user.create(newUser)
        this.ctx.redirect('/admin')
    }
    async login() {

        await this.ctx.render('login/login')
    }
    async doLogin() {
        let userInfo = this.ctx.request.body;
        // 根据用户名查找密码
        let users = await this.ctx.model.User.findAll({
                where: {
                    username: userInfo.username
                }
            })
            // 如果有这个用户，保存session
            // console.log(user)
        if (users) {
            this.ctx.session.userInfo = users[0]
            this.ctx.redirect('/admin')
        }
    }

    async loginout() {
        this.ctx.session.userInfo = null;
        this.ctx.redirect('/admin/login')
    }
    //如果没有权限，就跳转到这里
    async noPermission() {
        await this.ctx.render('login/noPermission')
    }
}

module.exports = AdminController;