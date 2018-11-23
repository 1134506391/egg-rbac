'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  // router.get('/', controller.home.index);
  app.router.get('/', 'index.render');

  app.router.get('/userFind', app.controller.test1.test1);
  app.router.get('/userCreate', app.controller.test1.test2);
  app.router.get('/userUpdate', app.controller.test1.test3);
  app.router.get('/userDestroy', app.controller.test1.test4);
  app.router.get('/noAllow', app.controller.test1.noAllow);
  app.router.get('/login', app.controller.test1.loginHtml);
  app.router.post('/login', app.controller.test1.login);
  app.router.get('/logout', app.controller.test1.logout);


  app.router.get('/userAll', app.controller.user.findAll);
  app.router.get('/user/:id', app.controller.user.findOne);

  app.router.get('/roleAll', app.controller.role.findAll);

  app.router.get('/accessAll', app.controller.access.findAll);
};
