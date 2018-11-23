'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findAll() {
    const {
      ctx,
    } = this;
    const res = await ctx.model.User.findAndCountAll();
    return res;
  }

  async findOne(id) {
    const { ctx } = this;
    const res = await ctx.model.User.findById(id, {
      include: [
        {
          model: this.ctx.model.Role,
          attributes: [ 'id', 'name', 'status' ],
          include: [
            {
              model: this.ctx.model.Access,
              attributes: [ 'id', 'title', 'urls', 'status' ],
            },
          ],
        },
      ],
    });
    return res;
  }
}

module.exports = UserService;
