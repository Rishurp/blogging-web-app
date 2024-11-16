import { AppBar, Toolbar, Typography, Button, Box, Avatar } from "@mui/material";

const Navbar = ({ username, onLogout }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
       
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          BlogMaster
        </Typography>

       
        <Box display="flex" alignItems="center">
          <Avatar
            alt={username}
            src="https://img.icons8.com/?size=100&id=77883&format=png&color=000000"
            sx={{
              marginRight: 1,
              width: 32,
              height: 32,
              backgroundColor: "#f57c00", // Fallback background color
            }}
          />
          <Typography
            variant="body1"
            sx={{ marginRight: 2, fontWeight: "medium" }}
          >
            {username}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={onLogout}
            sx={{ textTransform: "none" }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
