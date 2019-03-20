'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
    async findAll() {
        try {
            const roleList = await this.ctx.model.Role.findAll();
            return roleList;
        } catch (error) {
            console.log(error)
        }
    }
    async findById(id) {
        try {
            const role = await this.ctx.model.Role.findById(id);
            return role;
        } catch (error) {
            console.log(error)
        }
    }

    async create(newRole) {
        try {
            await this.ctx.model.Role.create(newRole);
        } catch (error) {
            console.log(error)
        }
    }

    async update(newRole) {
        try {
            const roleDB = await this.ctx.model.Role.findById(newRole.id);
            await roleDB.update(newRole);
        } catch (error) {
            console.log(error)
        }
    }

    async destroy(id) {
        try {
            const role = await this.ctx.model.Role.findById(id);
            await role.destroy();
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = RoleService;