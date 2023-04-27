import React from "react";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Switch from "@mui/material/Switch";
import NightsStayIcon from "@mui/icons-material/NightsStay";

function Sidebar({ setMode, mode }) {
  return (
    <Box sx={{ display: { xs: "none", sm: "inline" } }} flex={1} p={3}>
      <Box position="fixed">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
        >
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Outbox" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <ReportGmailerrorredIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <NightsStayIcon />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              inputProps={{ "aria-label": "controlled" }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
