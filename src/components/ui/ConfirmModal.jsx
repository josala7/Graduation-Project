/* eslint-disable react/prop-types */
import { Box, Modal, Stack, Button, Typography } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { deleteImg } from "../../assets";
import { useEffect } from "react";

function ConfirmModal({
  open,
  setOpen,
  onConfirm,
  isConfirmLoading,
  isSuccess,
}) {
  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, setOpen]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          borderRadius: 6,
          border: "none",
          outline: "none",
          width: { xs: 340, sm: 500 },
          p: 2,
          direction: "rtl",
          overflow: "hidden",
        }}
      >
        {/* header */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <div></div>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
            display={"flex"}
            alignItems={"center"}
          >
            <IoClose style={{ fontSize: 25 }} />
          </Box>
        </Stack>

        <Stack
          spacing={2}
          sx={{
            p: 2,
            pt: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={deleteImg} alt="delete" width={"100px"} />
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
            }}
          >
            هل أنت متأكد من حذف هذا العنصر؟
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={5} justifyContent={"center"}>
          <Button variant="contained" color="error" onClick={onConfirm}>
            {isConfirmLoading ? "تحميل.." : "حذف"}
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpen(false)}
          >
            اٍلغاء
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ConfirmModal;
