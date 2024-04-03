const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "Authkey",
    {
      authkey: {
        type: Sequelize.STRING(44),
        primaryKey: true,
      },
      userid: {
        type: Sequelize.INTEGER(),
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
      tableName: "authkey",
    }
  );
};
