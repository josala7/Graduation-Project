/* eslint-disable react/prop-types */
import { useState } from "react";
import AppButton from "./AppButton";
import AppModal from "./AppModal";

function AddItemButton({
  children,
  modalContent,
  modalHeader,
  props,
  isSuccess,
}) {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <>
      <AppButton onClick={() => setOpenAddModal(true)} {...props}>
        {children}
      </AppButton>

      <AppModal
        isSuccess={isSuccess}
        open={openAddModal}
        setOpen={setOpenAddModal}
        headerTitle={modalHeader}
      >
        {modalContent}
      </AppModal>
    </>
  );
}

export default AddItemButton;
