import { styled } from "@mui/joy";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PetsIcon from "@mui/icons-material/Pets";
import Badge from "@mui/material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputBase from "@mui/material/InputBase";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "50%"
}));
const Icons = styled("box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));
const UserBox = styled("box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));
function Navbar() {
  const [open, setopen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Sahdev Rajput Personal Site
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..">Search</InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailOutlineIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            onClick={(e) => setopen(true)}
            src="https://media.licdn.com/dms/image/D4D03AQHMBy6XW5UJ2Q/profile-displayphoto-shrink_800_800/0/1682194029270?e=1687996800&v=beta&t=VXISrzkkuzhebiR1zd2dEHnt0mO1X0tUOxv_rZEp1uI"
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setopen(true)}>
          <Avatar src="https://media.licdn.com/dms/image/D4D03AQHMBy6XW5UJ2Q/profile-displayphoto-shrink_800_800/0/1682194029270?e=1687996800&v=beta&t=VXISrzkkuzhebiR1zd2dEHnt0mO1X0tUOxv_rZEp1uI"></Avatar>
          <Typography>Sahdev</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button"
        }}
        open={open}
        onClose={(e) => setopen(false)}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
export default Navbar;
