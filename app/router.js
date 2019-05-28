'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/admin', controller.admin.admin.index);
    router.get('/admin/register', controller.admin.admin.register);
    router.get('/admin/login', controller.admin.admin.login);
    router.post('/admin/login', controller.admin.admin.doLogin);
    router.get('/admin/loginout', controller.admin.admin.loginout);
    router.get('/admin/noPermission', controller.admin.admin.noPermission);
    //角色
    router.get('/admin/role', controller.admin.role.index);
    router.get('/admin/role/add', controller.admin.role.add);
    router.post('/admin/role/add', controller.admin.role.doAdd);
    router.get('/admin/role/edit', controller.admin.role.edit);
    router.post('/admin/role/edit', controller.admin.role.doEdit);
    router.get('/admin/role/delete/:id', controller.admin.role.delete);
    router.get('/admin/role/auth', controller.admin.role.auth);
    router.post('/admin/role/auth', controller.admin.role.doAuth);

    //用户
    router.get('/admin/user', controller.admin.user.index);
    router.get('/admin/user/add', controller.admin.user.add);
    router.post('/admin/user/add', controller.admin.user.doAdd);
    router.get('/admin/user/edit', controller.admin.user.edit);
    router.post('/admin/user/edit', controller.admin.user.doEdit);
    router.get('/admin/user/delete/:id', controller.admin.user.delete);
    //权限
    router.get('/admin/permission', controller.admin.permission.index);
    router.get('/admin/permission/add', controller.admin.permission.add);
    router.post('/admin/permission/add', controller.admin.permission.doAdd);
    router.get('/admin/permission/edit', controller.admin.permission.edit);
    router.post('/admin/permission/edit', controller.admin.permission.doEdit);
    router.get('/admin/permission/delete/:id', controller.admin.permission.delete);
};