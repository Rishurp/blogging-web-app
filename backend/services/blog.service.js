const { Blog } = require("../models");
const ApiError = require("../utils/ApiError");

const createNewBlog = async (blog, userid) => {

  let newBlog = await Blog.create({
    blog: blog,
    userid: userid,
  });



  return newBlog;
};

const getBlogData = async (userId) => {
  const allBlog = await Blog.find();

  console.log(allBlog)
  filterPost = allBlog.filter((blog) => blog.userid === userId);
  return filterPost;
};

const deleteBlog = async (id) => {
  let blog = await Blog.findByIdAndDelete(id);


  if (!blog) {
    throw new ApiError(400, "User does not have any blog with this id");
  }

  return blog;
};

const updateBlog = async (id, data) => {
  let blog = await Blog.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!blog) 
    throw new ApiError(400, " No blog to update");
  }
  return blog;
};


module.exports = {
  createNewBlog,
  getBlogData,
  deleteBlog,
  updateBlog,
};