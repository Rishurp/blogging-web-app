const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  blog: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports.Blog = Blog;
