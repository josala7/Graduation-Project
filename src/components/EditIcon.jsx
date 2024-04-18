/* eslint-disable react/prop-types */
import {
  MdModeEditOutline,
  MdOutlineDelete,
  MdOutlineEdit,
} from "react-icons/md";
import { Box } from "@mui/material";
import AppModal from "./ui/AppModal";

function EditIcon({
  modalHeader,
  modalContent,
  openEditModal,
  setOpenEditModal,
}) {
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
      >
        {modalContent}
      </AppModal>
    </div>
  );
}

export default EditIcon;
