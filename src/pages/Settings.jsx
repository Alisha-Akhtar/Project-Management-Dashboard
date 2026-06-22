import {
  Paper,
  Typography,
} from "@mui/material";

export default function Settings() {
  return (
    <Paper sx={{ p: 4 }}>

      <Typography variant="h5">
        Settings
      </Typography>

      <Typography mt={2}>
        Dark Mode Settings
      </Typography>

      <Typography>
        User Preferences
      </Typography>

    </Paper>
  );
}