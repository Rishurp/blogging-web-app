const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token.split(" ")[1]);
  try {
    jwt.verify(token.split(" ")[1], config.jwt_secret_key);

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = auth;