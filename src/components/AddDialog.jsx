import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

import { useState } from "react";

export default function AddDialog({
  open,
  setOpen,
  setRows,
}) {
  const [form, setForm] = useState({
    name: "",
    area: "",
    description: "",
    image: "",
  });

  const handleAdd = () => {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>
        Add Project
      </DialogTitle>

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
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <TextField
          label="Area"
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
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file =
              e.target.files[0];

            if (file) {
              setForm({
                ...form,
                image:
                  URL.createObjectURL(
                    file
                  ),
              });
            }
          }}
        />

        <Button
          variant="contained"
          onClick={handleAdd}
        >
          Save Project
        </Button>
      </DialogContent>
    </Dialog>
  );
}