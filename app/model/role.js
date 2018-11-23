'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize;
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
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true,
  });
  Role.associate = function() {
    app.model.Role.hasMany(app.model.User);
    app.model.Role.hasOne(app.model.Access);
    // app.model.Role.hasMany(app.model.Access);
  };
  return Role;
};
