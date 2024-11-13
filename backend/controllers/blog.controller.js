const { blogService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getBlog = async (req, res) => {
  const userid = req.params.userid
  console.log(userid)
  const response = await blogService.getBlogData(userid);
  res.status(200).send(response);
};
const createBlog = catchAsync(async (req, res) => {
  const { blog, userid} = req.body;

  const response = await blogService.createNewBlog(blog, userid);
  res.status(200).send(response);
});

const deleteBlog = catchAsync(async (req, res) => {
  
  const response = await blogService.deleteBlog(req.params.id);
  res.status(200).send({ response, message: "Blog deleted successfully" });
});

const updateBlog = catchAsync(async (req, res) => {
  const response = await blogService.updateBlog(req.params.id, req.body);
  res.status(200).send({ response, message: "Blog updated successfully" });
});

module.exports = {
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};