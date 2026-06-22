import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import {
  NavLink,
} from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          mt: "64px",
        },
      }}
    >
      <List>

        <ListItemButton
          component={NavLink}
          to="/"
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText
            primary="Dashboard"
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/projects"
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>

          <ListItemText
            primary="Projects"
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/settings"
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText
            primary="Settings"
          />
        </ListItemButton>

      </List>
    </Drawer>
  );
}