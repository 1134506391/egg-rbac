'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Role = app.model.define('role', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    created_at: app.Sequelize.DATE,
    updated_at: {
      type: app.Sequelize.DATE,
    },
  }, {
    freezeTableName: true,
    // underscored: true,
  });
  Role.associate = function() {
    app.model.Role.hasMany(app.model.User, { as: 'user' });
  };
  return Role;
};
