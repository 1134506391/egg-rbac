'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const userList = await this.ctx.service.user.findAll();
        await this.ctx.render('user/index', {
            userList,
        });
    }
    async add() {
        const roleList = await this.ctx.service.role.findAll();
        await this.ctx.render('user/add', {
            roleList
        });
    }
    async doAdd() {
        const newUser = this.ctx.request.body;
        await this.ctx.service.user.create(newUser);
        this.ctx.redirect('/admin/user')
    }
    async edit() {
        const id = this.ctx.query.id;
        const user = await this.ctx.service.user.findById(id);
        const roleList = await this.ctx.service.role.findAll();
        console.log('e')
        console.log(JSON.stringify(user))
        console.log(JSON.stringify(roleList))
        await this.ctx.render('user/edit', {
            user,
            roleList
        });
    }
    async doEdit() {
        const newUser = this.ctx.request.body;
        console.log('rr')
        console.log(newUser)
        await this.ctx.service.user.update(newUser);
        this.ctx.redirect('/admin/user')
    }
    async delete() {
        const id = this.ctx.params.id;
        await this.ctx.service.user.destroy(id);
        this.ctx.redirect('/admin/user')
    }
}

module.exports = UserController;