/* eslint-disable react/prop-types */
import { MdModeEditOutline } from "react-icons/md";
import { Box } from "@mui/material";
import AppModal from "./ui/AppModal";
import { useEffect, useState } from "react";

function EditIcon({ modalHeader, modalContent, isSuccess }) {
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <div>
      <Box
        onClick={() => setOpenEditModal(true)}
        sx={{
          color: "#e3a008",
          p: "2px",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#feecdc",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        <MdModeEditOutline />
      </Box>

      <AppModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        headerTitle={modalHeader}
        isSuccess={isSuccess}
      >
        {modalContent}
      </AppModal>
    </div>
  );
}

export default EditIcon;
