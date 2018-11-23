'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async findAll() {
    const { ctx } = this;
    const res = await ctx.service.role.findAll();
    console.log(JSON.stringify(res));
    await this.ctx.render('page/roleAll.html', {
      data: res,
    });
  }
}

module.exports = RoleController;
