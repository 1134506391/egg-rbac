module.exports = (options, app) => {

  return async function isPermission(ctx, next) {
    console.log(ctx.session);
    // 拿到用户登录session
    if (ctx.session) {
      const userId = ctx.session.sessionUserId;
      // 拿到用户对应的权限链接
      const res = await ctx.model.User.findById(1, {
        include: [{
          model: ctx.model.Role,
          attributes: [ 'id', 'name', 'status' ],
          include: [{
            model: ctx.model.Access,
            attributes: [ 'id', 'title', 'urls', 'status' ],
          }],
        }],
      });

      const userRoleAccessUrls = res.role.access.urls;
      const urlsArr = userRoleAccessUrls.split(',');
      const requestUrl = ctx.request.url;
      const hasId = urlsArr.some(val => {
        if (val == requestUrl) {
          return true;
        }
        if (requestUrl == '/' || requestUrl == '/login' || requestUrl == '/noAllow' || requestUrl == '/userAll' || requestUrl == '/roleAll' || requestUrl == '/accessAll') {
          return true;
        }
      });
      if (hasId) {
        await next();
        console.log('有权限');
      } else {
        await next();
        console.log('没有权限');
        ctx.redirect('/noAllow');
      }
    } else {
      await next();
    }
  };

};
