/* eslint-disable react/prop-types */
import { MdOutlineDelete } from "react-icons/md";
import { Box } from "@mui/material";
import { useState } from "react";
import ConfirmModal from "./ui/ConfirmModal";

function DeleteIcon({ onDelete, isDeleting }) {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  return (
    <div>
      <Box
        onClick={() => setOpenConfirmModal(true)}
        sx={{
          color: "#c43e3e",
          p: "2px",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f8d1d1",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        <MdOutlineDelete />
      </Box>

      <ConfirmModal
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        isConfirmLoading={isDeleting}
        onConfirm={onDelete}
      />
    </div>
  );
}

export default DeleteIcon;
