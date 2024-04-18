import { Box, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function AppModal({ children, open, setOpen, headerTitle }) {
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
          maxWidth: { xs: 340, sm: 600, md: 700 },
          // height: { xs: 600, md: 500 },
          direction: "rtl",
          overflow: "hidden",
        }}
      >
        {/* header */}
        <Stack
          direction={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          bgcolor={"#eee"}
        >
          <Typography variant="h6">{headerTitle}</Typography>

          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
            display={"flex"}
            alignItems={"center"}
          >
            <IoClose style={{ fontSize: 25 }} />
          </Box>
        </Stack>

        {/* body */}
        <Stack
          sx={{
            px: 2,
            py: 3,
            maxHeight: "500px",
            width: "100%",
            overflowY: "auto",
          }}
        >
          {children}
        </Stack>
      </Box>
    </Modal>
  );
}

export default AppModal;
