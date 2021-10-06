const express = require(`express`);
const db = require(`../db/db`);
const router = express.Router();

const { Users, Favourites } = require(`../models/index`);

router.post(`/fav`, function (req, res, next) {
  console.log(req.body);
  const { movie, userId } = req.body;
  Favourites.create({ movie: movie, userId: userId })
    .then((fav) => {
      res.status(201).json(fav);
    })
    .catch(next);
});

router.post("/favList", function (req, res, next) {
  Favourites.findAll({ where: { userId: req.body.userId } })
    .then((fav) => {
      res.status(201).json(fav);
    })
    .catch(next);
});

router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  Favourites.findByPk(id)
    .then((data) => data.destroy())
    .then(() => res.sendStatus(202))
    .catch(next);
});

module.exports = router;
