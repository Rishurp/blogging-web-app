const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

userSchema.statics.isEmailTaken = async (email) => {
  const user = await this.findOne({ email });
  return !!user;
};

const User = mongoose.model("User", userSchema);

module.exports.User = User;