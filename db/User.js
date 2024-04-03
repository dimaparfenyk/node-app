const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "User",
    {
      id: {
        type: Sequelize.INTEGER(),
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(100),
      },
      password: {
        type: Sequelize.STRING(44),
      },
      created_at: {
        type: Sequelize.STRING(),
        defaultValue: Math.floor(Date.now() / 100),
      },
      updated_at: {
        type: Sequelize.STRING(),
        defaultValue: Math.floor(Date.now() / 100),
      },
    },
    {
      timestamps: false,
      tableName: "user",
    }
  );
};
