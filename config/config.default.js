/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1551165895018_921';

    // add your middleware config here
    config.middleware = ['csrf', 'auth'];
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        dialectOptions: {
            charset: 'utf8mb4',
        },
        database: 'eggrbac',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '123456',
        timezone: '+08:00',
        // define: {
        //   // 字段以下划线（_）来分割（默认是驼峰命名风格）
        //   underscored: false,
        // },
    };
    config.view = {
        mapping: {
            '.html': 'ejs',
        },
    };
    config.session = {
        key: 'SESSION_ID', // key名字
        maxAge: 1000 * 60 * 24,
        httpOnly: true,
        encrypt: true, // 加密
        renew: true, // 最大时间范围内，刷新，自动增加最大时间
    };
    config.cluster = {
        listen: {
          port: 8003,
        },
      };
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};