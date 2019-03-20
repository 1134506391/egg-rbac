'use strict';

const Controller = require('egg').Controller;

class PermissionController extends Controller {
    async index() {
        const permissionList = await this.ctx.service.permission.findAll();
        console.log('cc')
        console.log(JSON.stringify(permissionList))
        await this.ctx.render('permission/index', {
            permissionList,
        });
    }
    async add() {
        const permissionList = await this.ctx.service.permission.findAll();
        await this.ctx.render('permission/add', {
            permissionList
        });
    }
    async doAdd() {
        const newPermission = this.ctx.request.body;
        await this.ctx.service.permission.create(newPermission);
        this.ctx.redirect('/admin/permission')
    }
    async edit() {
        const id = this.ctx.query.id;
        const permission = await this.ctx.service.permission.findById(id);
        await this.ctx.render('permission/edit', {
            permission
        });
    }
    async doEdit() {
        const newPermission = this.ctx.request.body;
        await this.ctx.service.permission.update(newPermission);
        this.ctx.redirect('/admin/permission')
    }
    async delete() {
        const id = this.ctx.params.id;
        await this.ctx.service.permission.destroy(id);
        this.ctx.redirect('/admin/permission')
    }
}

module.exports = PermissionController;