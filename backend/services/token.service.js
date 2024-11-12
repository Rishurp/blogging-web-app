const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateToken = async (user) => {
  const secretKey = config.jwt_secret_key;
  const payload = {
    userId: user._id,
    time: new Date(),
  };
  const token = jwt.sign(payload, secretKey, {
    expiresIn: config.jwt_expiration_in_minutes,
  });
  return token;
};

module.exports = {
  generateToken,
};