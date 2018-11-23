'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async findAll() {
    const { ctx } = this;
    const res = await ctx.service.user.findAll();
    console.log(JSON.stringify(res));
    await this.ctx.render('page/userAll.html', {
      data: res,
    });
  }

  async findOne() {
    const { ctx } = this;
    const id = +ctx.params.id;
    console.log(ctx.request);
    const res = await ctx.service.user.findOne(id);
    ctx.body = res;
  }
}

module.exports = UserController;
