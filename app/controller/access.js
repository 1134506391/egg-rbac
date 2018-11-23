'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async findAll() {
    const { ctx } = this;
    const res = await ctx.service.access.findAll();
    console.log(JSON.stringify(res));
    await this.ctx.render('page/accessAll.html', {
      data: res,
    });
  }
}

module.exports = AccessController;
