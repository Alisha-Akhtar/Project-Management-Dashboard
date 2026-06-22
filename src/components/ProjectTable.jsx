import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProjectTable({
  rows,
  onView,
  onEdit,
  onDelete,
}) {

  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    {
      field: "image",
      headerName: "Image",
      width: 90,
      renderCell: (params) => (
        <img
          src={params.row.image}
          alt=""
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
          }}
        />
      ),
    },

    { field: "name", headerName: "Name", width: 150 },
    { field: "area", headerName: "Area", width: 120 },
    { field: "description", headerName: "Description", width: 220 },

    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => onView(params.row)}
          >
            <VisibilityIcon />
          </IconButton>

          <IconButton
            color="warning"
            onClick={() => onEdit(params.row)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() => onDelete(params.row)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 520, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
      />
    </div>
  );
}