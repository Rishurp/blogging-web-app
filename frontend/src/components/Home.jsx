import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Container, Typography, Box } from "@mui/material";
import axios from "axios";
import AddBlog from "./AddBlog";
import BlogCard from "./BlogCard";
import Navbar from "../components/Navbar";
import { useSnackbar } from "notistack";

export const config = {
  backendEndpoint: "https://blogging-web-app-bqfz.onrender.com/v1",
};

const Home = () => {
  // Using the useLocalStorage hook
  const [userId, setUserId] = useLocalStorage("userId", null);
  const [username, setUsername] = useLocalStorage("username", "Guest");
  const [token, setToken] = useLocalStorage("token", null);
  const [blogData, setBlogData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    setUserId(null);
    setUsername("Guest");
    setToken(null);
    localStorage.clear();
    window.location.reload();
  };

  const getBlog = async () => {
    try {
      const response = await axios.get(`${config.backendEndpoint}/blogs/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setBlogData(
          response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        );
      }
    } catch (error) {
      enqueueSnackbar("Failed to fetch posts", { variant: "error" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.backendEndpoint}/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogData(blogData.filter((post) => post._id !== id));
      enqueueSnackbar("Blog deleted successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Failed to delete post", { variant: "error" });
    }
  };

  const handleUpdate = async (id, blogText) => {
    try {
      const response = await axios.patch(
        `${config.backendEndpoint}/blogs/${id}`,
        { blog: blogText },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const updatedBlog = response.data.response.blog;

      setBlogData((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === id ? { ...blog, blog: updatedBlog } : blog
        )
      );
      enqueueSnackbar("Post updated successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Failed to update the post", { variant: "error" });
    }
  };

  const addNewBlog = (newBlog) => {
    setBlogData([newBlog, ...blogData]);
  };

  useEffect(() => {
    if (userId && token) {
      getBlog();
    }
  }, [userId, token]);

  return (
    <Container>
      <Navbar username={username} onLogout={handleLogout} />
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
        My Blog
      </Typography>
      <AddBlog onBlogAdded={addNewBlog} />
      <Box
        sx={{
          maxHeight: "60vh",
          overflowY: "auto",
          mt: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          padding: 2,
          boxShadow: 3,
        }}
      >
        {blogData.length > 0 ? (
          blogData.map((blog) => (
            <BlogCard
              key={blog._id}
              blogData={blog}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" align="center">
            No blog posts found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Home;
