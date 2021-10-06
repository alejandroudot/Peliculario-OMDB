const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const favouritesRouter = require("./favourites");

//RUTAS
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/favourites", favouritesRouter);

module.exports = router;
