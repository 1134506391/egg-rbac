'use strict';
const url = require('url')
const Service = require('egg').Service;

class AuthService extends Service {
    async checkAdmin() {
        const Op = this.ctx.app.Sequelize.Op;
        const { ctx } = this;
        const pathname = url.parse(ctx.request.url).pathname;
        // 1.获取当前角色
        // 2.根据当前角色查出对应权限
        // 3.将权限里url,拼接成一个url数组
        // 4.当前仿问的url是否在url数组里

        // 1.
        let userInfo = ctx.session.userInfo;
        let roleId = userInfo.role_id;
        // 忽略权限判断的地址,超级管理员
        var ignoreUrl = ['/admin', '/admin/login', '/admin/register', '/admin/loginout']
        if (ignoreUrl.indexOf(pathname) != -1 || userInfo.id == '1') {
            return true;
        }
        //2.
        let permission = await ctx.model.RolePermission.findAll({
                where: {
                    role_id: roleId
                }
            })
            // 得到所有的权限ids
        let permissionIds = [];
        permission.forEach(item => {
            permissionIds.push(item.permission_id)
        })
        let permissions = await ctx.model.Permission.findAll({
                where: {
                    id: {
                        [Op.or]: permissionIds
                    }
                }
            })
            // 3.
        let permissionUrls = []
        permissions.forEach(item => {
            permissionUrls.push(item.url)
        })
        console.log('iiii')
        console.log(JSON.stringify(permissionUrls))
            // 4.
        if (permissionUrls.indexOf(pathname) != -1) {
            return true;
        }
        return false;
    }

    async getAdminList(roleId) {

        const Op = this.ctx.app.Sequelize.Op;
        const { ctx } = this;
        let permission = await ctx.model.RolePermission.findAll({
                where: {
                    role_id: roleId
                }
            })
            // 得到所有的权限ids
        console.log('得到所有的权限ids')
        console.log(roleId)
        console.log(JSON.stringify(permission))
        let permissionIds = [];
        permission.forEach(item => {
            permissionIds.push(item.permission_id)
        })
        let permissions = await ctx.model.Permission.findAll({
            where: {
                id: {
                    [Op.or]: permissionIds
                },
                permission_id: 0,
            },
            include: [{
                model: this.ctx.model.Permission,
                as: 'permissions',
                where: {
                    type: {
                        [Op.in]: [1, 2]
                    }
                }
            }]
        })

        console.log('permissions:')
        console.log(JSON.stringify(permissions))
        return permissions;
    }
}

module.exports = AuthService;