const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  MongoDB: process.env.MONGODB_URL,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
  jwt_expiration_in_minutes: process.env.JWT_EXPIRE_IN_MINUTES,
};
