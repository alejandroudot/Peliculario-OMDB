// server configs
const express = require("express");
const app = express();
const routes = require("./routes/index");
const db = require("./db/db");
//Requires de passport
const sessions = require(`express-session`);
const cookieParser = require(`cookie-parser`);
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

// Express Route File Requires
const { Users, Favourites } = require("./models");

// parsing middleware
app.use(express.json());

//APP.USE DE PASSPORT
app.use(cookieParser());

app.use(
  sessions({
    secret: "omdb",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//APP ROUTES
app.use("/api", routes);
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

//Passport Configuration
passport.use(
  new LocalStrategy({ usernameField: `email` }, function (
    email,
    password,
    done
  ) {
    Users.findOne({ where: { email } })
      .then((user) => {
        if (!user) return done(`Incorrect Credentials`, false); //Otra forma es done(null,false, {message: `Incorrect Credentials`}) PD: recibe un campo de mensaje
        user.validPassword(password, user.salt).then((valid) => {
          valid ? done(null, user) : done(`Incorrect Credentials`, false);
        });
      })
      .catch(done);
  })
);

// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function (id, done) {
  Users.findByPk(id).then((user) => done(null, user));
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch((err) => console.log(err));
[0];
