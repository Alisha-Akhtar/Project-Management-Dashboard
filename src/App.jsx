import { useState } from "react";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

import {
  CssBaseline,
  Box,
} from "@mui/material";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#2563eb",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Box
            sx={{
              flexGrow: 1,
              ml: "240px",
              mt: "64px",
              p: 3,
            }}
          >

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/projects"
                element={<Projects />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />

            </Routes>

          </Box>

        </Box>

      </BrowserRouter>

    </ThemeProvider>
  );
}