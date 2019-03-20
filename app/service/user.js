'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        try {
            const userList = await this.ctx.model.User.findAll({
                include: [{
                    model: this.ctx.model.Role,
                    as: 'role',
                    attributes: ['name'],
                }]
            });
            // console.log(JSON.stringify(userList))
            return userList;
        } catch (error) {
            console.log(error)
        }
    }
    async findById(id) {
        try {
            const user = await this.ctx.model.User.findById(id);
            return user;
        } catch (error) {
            console.log(error)
        }
    }

    async create(newUser) {
        try {
            await this.ctx.model.User.create(newUser);
        } catch (error) {
            console.log(error)
        }
    }

    async update(newUser) {
        try {
            const userDB = await this.ctx.model.User.findById(newUser.id);
            await userDB.update(newUser);
        } catch (error) {
            console.log(error)
        }
    }

    async destroy(id) {
        try {
            const user = await this.ctx.model.User.findById(id);
            await user.destroy();
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserService;