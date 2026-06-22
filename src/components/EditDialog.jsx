import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

import { useState, useEffect } from "react";

export default function EditDialog({
  item,
  setItem,
  setRows,
}) {
  const [form, setForm] = useState({
    name: "",
    area: "",
    description: "",
  });

  useEffect(() => {
    if (item) {
      setForm(item);
    }
  }, [item]);

  const handleUpdate = () => {
    setRows((prev) =>
      prev.map((p) =>
        p.id === item.id ? form : p
      )
    );

    setItem(null);
  };

  return (
    <Dialog
      open={Boolean(item)}
      onClose={() => setItem(null)}
    >
      <DialogTitle>Edit Project</DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 1,
          width: "400px",
        }}
      >
        <TextField
          label="Project Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <TextField
          label="Area"
          value={form.area}
          onChange={(e) =>
            setForm({
              ...form,
              area: e.target.value,
            })
          }
        />

        <TextField
          multiline
          rows={3}
          label="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <Button
          variant="contained"
          onClick={handleUpdate}
        >
          Update
        </Button>
      </DialogContent>
    </Dialog>
  );
}