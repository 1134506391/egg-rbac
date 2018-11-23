'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async findAll() {
    const {
      ctx,
    } = this;
    const res = await ctx.model.Role.findAndCountAll();
    return res;
  }
}

module.exports = RoleService;
