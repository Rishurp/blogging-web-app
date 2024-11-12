const express = require("express");
const blogController = require("../../controllers/blog.controller");
const router = express.Router();
const auth = require("../../middlewares/auth");
router.get("/:userid", auth, blogController.getBlog);
router.post("/", blogController.createBlog);
router.delete("/:id", blogController.deleteBlog);
router.patch("/:id", blogController.updateBlog);

module.exports = router;
