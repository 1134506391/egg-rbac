'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize;
  const Access = app.model.define('access', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
    },
    urls: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    role_id: {
      type: INTEGER,
    },
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true,
  });
  Access.associate = function() {
    app.model.Access.belongsTo(app.model.Role);
    // app.model.Access.hasMany(app.model.Role);
  };
  return Access;
};
