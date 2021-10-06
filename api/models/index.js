const Users = require(`./Users`);
const Favourites = require(`./Favourites`);

//CONECCIONES  /tablas intermedias
/* Favourites.belongsTo(Users, { as: "author" }); */
Users.hasMany(Favourites);
Favourites.belongsTo(Users);

module.exports = {
  Users: Users,
  Favourites: Favourites,
};
