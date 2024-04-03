const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-app", "root", "", {
  host: "127.0.0.1:3306",
  dialect: "mysql",
});

const User = require("./User")(sequelize);
const Authkey = require("./Authkey")(sequelize);

module.exports = {
  sequelize,
  user: User,
  authkey: Authkey,
};
