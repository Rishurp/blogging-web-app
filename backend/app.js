const express = require("express");
const routes = require("./routes/v1");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);
app.use(errorHandler);


app.use((req, res, next) => {
  next(new ApiError(404, "Not Found"));
});

module.exports = app;