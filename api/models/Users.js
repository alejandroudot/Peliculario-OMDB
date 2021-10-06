const Sequelize = require(`sequelize`);
const db = require("../db/db");
const crypto = require(`bcrypt`);
const passport = require("passport");

//-- User Model
class Users extends Sequelize.Model {}
Users.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

//hookardos!
Users.addHook(`beforeCreate`, function (user) {
  console.log(`hook`, user);
  return crypto
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hashPass(user.password, user.salt);
    })
    .then((hash) => (user.password = hash));
});

//instance method
Users.prototype.hashPass = function (password, salt) {
  return crypto.hash(password, salt);
};

Users.prototype.validPassword = function (password, salt) {
  return this.hashPass(password, salt).then((pass) => {
    return this.password === pass;
  });
};

module.exports = Users;
