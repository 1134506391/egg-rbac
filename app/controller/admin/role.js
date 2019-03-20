'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
    async index() {
        const roleList = await this.ctx.service.role.findAll();
        await this.ctx.render('role/index', {
            roleList,
        });
    }
    async add() {
        await this.ctx.render('role/add');
    }
    async doAdd() {
        const newRole = this.ctx.request.body;
        await this.ctx.service.role.create(newRole);
        this.ctx.redirect('/admin/role')
    }
    async edit() {
        const id = this.ctx.query.id;
        const role = await this.ctx.service.role.findById(id);
        await this.ctx.render('role/edit', {
            role
        });
    }
    async doEdit() {
        const newRole = this.ctx.request.body;
        await this.ctx.service.role.update(newRole);
        this.ctx.redirect('/admin/role')
    }
    async delete() {
        const id = this.ctx.params.id;
        await this.ctx.service.role.destroy(id);
        this.ctx.redirect('/admin/role')
    }
    async auth() {
        let data = await this.ctx.service.permission.findChild();
        let accessList = data.filter(item => {
            return item.permissions.length > 0
        })
        let roleId = this.ctx.query.id;
        console.log(roleId)
        let accessById = await this.ctx.service.rolePermission.findAccess(roleId)
        accessList = JSON.parse(JSON.stringify(accessList))
        accessById.forEach(item => {
            accessList.forEach(item1 => {
                if (item.id == item1.id) {
                    item1.checked = true
                }
                item1.permissions.forEach(item2 => {
                    if (item.id == item2.id) {
                        item2.checked = true
                    }
                })
            })
        })

        console.log('ppp')
        console.log(JSON.stringify(accessList))
        await this.ctx.render('role/auth', {
            accessList,
            roleId,

        });
        // this.ctx.body = result;
    }
    async doAuth() {
        var body = this.ctx.request.body;
        await this.ctx.service.rolePermission.create(body)
        this.ctx.redirect('/admin/role')

    }
}

module.exports = RoleController;