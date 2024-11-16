import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const BlogCard = ({ blogData, onDelete, onUpdate }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBlog, setUpdatedBlog] = useState(blogData.blog);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleMenuClose();
    onDelete(blogData._id);
  };

  const handleEdit = () => {
    handleMenuClose();
    setIsEditing(true);
  };

  const handleUpdate = () => {
    console.log(blogData._id)
    onUpdate(blogData._id, updatedBlog); 
    setIsEditing(false); 
  };

  const handleChange = (event) => {
    setUpdatedBlog(event.target.value); 
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        boxShadow: 3,
        position: "relative",
      }}
    >
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              fullWidth
              multiline
              value={updatedBlog}
              onChange={handleChange}
              rows={4}
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </>
        ) : (
          <Typography variant="body1" sx={{ marginTop: 1 }}>
           {blogData.blog}
          </Typography>
        )}
      </CardContent>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Card>
  );
};

export default BlogCard;
