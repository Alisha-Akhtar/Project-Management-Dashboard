import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export default function DeleteDialog({
  item,
  setItem,
  setRows,
}) {
  const handleDelete = () => {
    setRows((prev) =>
      prev.filter((p) => p.id !== item.id)
    );

    setItem(null);
  };

  return (
    <Dialog
      open={Boolean(item)}
      onClose={() => setItem(null)}
    >
      <DialogTitle>
        Delete Project?
      </DialogTitle>

      <DialogContent>
        Are you sure you want to delete this project?
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setItem(null)}>
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}