import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import ProjectTable from "../components/ProjectTable";
import { initialProjects } from "../data/projects";

import AddDialog from "../components/AddDialog";
import EditDialog from "../components/EditDialog";
import ViewDialog from "../components/ViewDialog";
import DeleteDialog from "../components/DeleteDialog";

export default function Projects() {

  const [rows, setRows] = useState(initialProjects);
  const [search, setSearch] = useState("");

  const [openAdd, setOpenAdd] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const filtered = rows.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 2 }}>

      {/* HEADER */}
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Projects
      </Typography>

      {/* TOP ACTION BAR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          gap: 2,
        }}
      >

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <SearchIcon />
          <TextField
            size="small"
            placeholder="Search projects..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenAdd(true)}
        >
          Add Project
        </Button>

      </Box>

      {/* TABLE */}
      <ProjectTable
        rows={filtered}
        onView={setViewItem}
        onEdit={setEditItem}
        onDelete={setDeleteItem}
      />

      {/* DIALOGS */}
      <AddDialog open={openAdd} setOpen={setOpenAdd} setRows={setRows} />
      <EditDialog item={editItem} setItem={setEditItem} setRows={setRows} />
      <ViewDialog item={viewItem} setItem={setViewItem} />
      <DeleteDialog item={deleteItem} setItem={setDeleteItem} setRows={setRows} />

    </Box>
  );
}