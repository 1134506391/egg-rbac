'use strict';

const Service = require('egg').Service;

class AccessService extends Service {
  async findAll() {
    const {
      ctx,
    } = this;
    const res = await ctx.model.Access.findAndCountAll();
    return res;
  }
}

module.exports = AccessService;
