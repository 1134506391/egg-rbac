'use strict';

const Service = require('egg').Service;

class RolePermissionService extends Service {
    async create(body) {
            try {
                let id = body.roleId;
                let permissionId = body.permissionIds;
                //先删除
                await this.ctx.model.RolePermission.destroy({
                        where: {
                            role_id: id
                        }
                    })
                    //后增加
                permissionId.forEach(async(item) => {
                    await this.ctx.model.RolePermission.create({
                        role_id: id,
                        permission_id: parseInt(item),
                        status: 1
                    })
                })
            } catch (error) {
                console.log(error)
            }
        }
        //根据角色，得到权限
    async findPermissionByRoleId(roleId) {
        const Op = this.ctx.app.Sequelize.Op;
        var rolePermissions = await this.ctx.model.RolePermission.findAll({
            where: {
                role_id: roleId
            }
        });
        let permissionIds = [];
        rolePermissions.forEach((item) => {
            permissionIds.push(item.permission_id)
        })
        var permissions = await this.ctx.model.Permission.findAll({
            where: {
                id: {
                    [Op.or]: permissionIds
                },
            },
        })
        return permissions
    }
}

module.exports = RolePermissionService;