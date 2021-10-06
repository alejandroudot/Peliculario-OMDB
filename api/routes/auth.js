const express = require(`express`);
const router = express.Router();
const passport = require("passport");

const { Users } = require(`../models`);

router.post(`/register`, function (req, res, next) {
  Users.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.post(`/login`, passport.authenticate(`local`), function (req, res) {
  const user = req.user;
  res.status(200).json(user);
});

router.post(`/logout`, function (req, res, next) {
  req.logout();
  res.redirect("/");
});

router.get("/me", (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
