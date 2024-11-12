const express = require("express");
const authRoutes = require("./auth.routes");
const postRoutes = require("./blog.routes");

const mainRouter = express.Router();

mainRouter.use("/auth", authRoutes);
mainRouter.use("/blogs", postRoutes);
module.exports = mainRouter;