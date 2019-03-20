const url = require('url')
module.exports = (options, app) => {
    return async function adminauth(ctx, next) {
        // 1. 如果没有登录,跳转登录
        // 2.如果登录,判断当前用户对应的角色,是否有权限

        let pathname = url.parse(ctx.request.url).pathname;
        if (ctx.session.userInfo) {
            ctx.state.userInfo = ctx.session.userInfo;
            var roleId = ctx.session.userInfo.role_id;
            var d = await ctx.service.rolePermission.findAccess(roleId)

            let isPermission = await ctx.service.auth.checkAdmin();
            if (isPermission) {
                //左侧导航
                let getAdminList = await ctx.service.auth.getAdminList();
                ctx.state.pageNav = getAdminList;
                await next()
            } else {

                ctx.body = '你没有权限'
            }
        } else {
            if (pathname == '/admin' || pathname == '/admin/login' || pathname == '/admin/register' || pathname == '/admin/loginout') {
                await next()
            } else {
                ctx.redirect('/admin/login')
            }
        }
    };
};