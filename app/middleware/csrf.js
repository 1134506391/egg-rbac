module.exports = (options, app) => {
  return async function adminauth(ctx, next) {

    ctx.state.csrf = ctx.csrf; // 全局变量
    // console.log('aa');
    await next();
  };
};
