const config = require("./config/config");
const app = require("./app");
const mongoose = require("mongoose");
const { User } = require("./models");
const { prototype } = require("./utils/ApiError");

mongoose
  .connect(config.MongoDB)
  .then(() => {
    console.log("MongoDB is connected");

    app.listen(config.port, () => {
      console.log(`Running on Port : ${config.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });