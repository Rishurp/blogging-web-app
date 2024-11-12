const userService = require("./user.service");
const bcrypt = require("bcrypt");
const ApiError = require("../utils/ApiError");

const loginWithEmailandPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);


  const verifiedPassword = await bcrypt.compare(password, user.password);
  if (verifiedPassword === false) {
    throw new ApiError(401, "Incorrect email or Password");
  }

  return user;
};

module.exports = {
  loginWithEmailandPassword,
};