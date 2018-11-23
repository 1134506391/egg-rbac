'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542848438708_7937';

  // add your config here
  config.middleware = [];
  config.view = {
    defaultViewEngine: 'nunjucks',
  };
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    dialectOptions: {
      charset: 'utf8mb4',
    },
    database: 'rbac2',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 白名单
    domainWhiteList: [ 'http://localhost:8080' ],
  };
  config.middleware = [ 'isPermission' ];
  config.isPermission = {
    userId: [
      '1',
      '2',
    ],
  };
  config.session = {
    key: 'SESSION_ID', // key名字
    maxAge: 1000 * 60 * 24,
    httpOnly: true,
    encrypt: true, // 加密
    renew: true, // 最大时间范围内，刷新，自动增加最大时间
  };
  return config;
};
