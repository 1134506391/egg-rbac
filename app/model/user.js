'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
    created_at: DATE,
    updated_at: DATE,
    role_id: {
      type: INTEGER,
    },
  }, {
    freezeTableName: true,
  });

  User.associate = function() {
    app.model.User.belongsTo(app.model.Role);
  };
  return User;
};
