const express = require(`express`);
const db = require(`../db/db`);
const router = express.Router();

const { Users, Favourites } = require(`../models/index`);

router.post("/searchUser", function (req, res, next) {
  const user = req.body;
  console.log(user);
  Users.findOne({ where: user })
    .then((data) => res.status(200).json(data))
    .catch(next);
});

router.get("/:id", function (req, res, next) {
  const userId = req.params.id;
  Favourites.findAll({ where: { userId: userId } }).then((data) =>
    res.status(200).json(data)
  );
});

module.exports = router;
