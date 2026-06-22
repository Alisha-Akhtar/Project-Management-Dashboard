import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";

export default function ViewDialog({ item, setItem }) {
  return (
    <Dialog
      open={Boolean(item)}
      onClose={() => setItem(null)}
      maxWidth="sm"
      fullWidth
    >
      {item && (
        <>
          <DialogTitle>Project Details</DialogTitle>

          <DialogContent>

            <img
              src={item.image}
              alt=""
              width="100%"
              style={{
                borderRadius: "10px",
                marginBottom: "15px",
                maxHeight: "250px",
                objectFit: "cover",
              }}
            />

            <Typography>
              <strong>Name:</strong> {item.name}
            </Typography>

            <Typography>
              <strong>Area:</strong> {item.area}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              {item.description}
            </Typography>

            <Button
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => setItem(null)}
            >
              Close
            </Button>

          </DialogContent>
        </>
      )}
    </Dialog>
  );
}