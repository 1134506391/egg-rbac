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
        /*
            1.找出所有的权限
            2.根据角色，找出角色所拥有的权限
        */
    async auth() {
        let roleId = this.ctx.query.id;
        let permissionList = await this.ctx.service.permission.findAll();
        let rolePermissionList = await this.ctx.service.rolePermission.findPermissionByRoleId(roleId)
        permissionList = JSON.parse(JSON.stringify(permissionList))
            //permissionList如果有rolePermissionList，就增加一个字段check==true
        rolePermissionList.forEach(item => {
            permissionList.forEach(item1 => {
                if (item.id == item1.id) {
                    item1.check = true
                }
                item1.permissions.forEach(item2 => {
                    if (item.id == item2.id) {
                        item2.check = true
                    }
                })
            })
        })
        await this.ctx.render('role/auth', {
            permissionList,
            roleId,

        });
    }
    async doAuth() {
        var body = this.ctx.request.body;
        console.log('----')
        console.log(JSON.stringify(body))
        await this.ctx.service.rolePermission.create(body)
        this.ctx.redirect('/admin/role')

    }
}

module.exports = RoleController;