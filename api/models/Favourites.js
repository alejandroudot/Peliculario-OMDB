const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Favourites extends Sequelize.Model {}
Favourites.init(
  {
    movie: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favourites" }
);
module.exports = Favourites;
