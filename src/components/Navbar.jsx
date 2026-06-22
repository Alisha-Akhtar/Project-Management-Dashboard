import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1300 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h6" fontWeight="bold">
          Project Management Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          🌙
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Box>

      </Toolbar>
    </AppBar>
  );
}