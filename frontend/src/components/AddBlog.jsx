import { useState } from "react";
import axios from "axios";
import { config } from "../App";
import { useSnackbar } from "notistack";

const Blog = ({ onBlogAdded }) => {
  const [blog, setBlog] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const userid = localStorage.getItem("userId");

  const handleBlog = (event) => {
    setBlog(event.target.value);
  };

  const addBlog = async (blog, userid) => {
    try {
      const response = await axios.post(
        `${config.backendEndpoint}/blogs`,
        { blog, userid },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        enqueueSnackbar("Your blog post was successfully uploaded!", {
          variant: "success",
        });
        onBlogAdded(response.data);
        setBlog("");
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong while posting", {
        variant: "error",
      });
    }
  };

  const handleShareBlog = () => {
    if (blog.trim()) {
      addBlog(blog, userid);
    } else {
      enqueueSnackbar("Blog content cannot be empty", { variant: "warning" });
    }
  };

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Create a Blog Post
        </h2>
        <div className="mb-6">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Write your blog content here..."
            onChange={handleBlog}
            value={blog}
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={handleShareBlog}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
