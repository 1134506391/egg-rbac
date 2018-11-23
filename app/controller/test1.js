'use strict';

const Controller = require('egg').Controller;

class Test1Controller extends Controller {
  async test1() {
    console.log(this.ctx.request.url);
    await this.ctx.render('page/test1.html');
  }
  async test2() {
    console.log('session是' + this.ctx.session.userSession);
    await this.ctx.render('page/test2.html');

  }
  async test3() {
    await this.ctx.render('page/test3.html');
  }
  async test4() {
    await this.ctx.render('page/test4.html');
  }
  async noAllow() {
    await this.ctx.render('page/noAllow.html');
  }
  async loginHtml() {
    console.log(this.ctx.request.url);
    await this.ctx.render('page/login.html');
  }
  async login() {
    const {
      ctx,
    } = this;
    console.log(ctx.request.body.userId);
    ctx.session.sessionUserId = Number(ctx.request.body.userId);
  }

  async logout() {
    const { ctx } = this;
    ctx.session.sessionUserId = null;
    ctx.redirect('/');
  }

  async user() {
    const { ctx } = this;
    const res = await ctx.service.user.findAll();
    await this.ctx.render('page/userAll.html', {
      data: res,
    });
  }
}

module.exports = Test1Controller;
