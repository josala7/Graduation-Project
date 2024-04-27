/* eslint-disable react/prop-types */
import { Box, Button, CircularProgress } from "@mui/material";

function AppButton({ children, onClick, isLoading, ...rest }) {
  return (
    <Button
      {...rest}
      onClick={() => onClick?.()}
      sx={{
        px: "30px",
        borderRadius: 2,
        fontSize: "16px",
        bgcolor: "#1cc182",
        color: "white",
        ":hover": {
          bgcolor: "#14a06a",
        },
      }}
    >
      {isLoading ? (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <CircularProgress
            size="15px"
            sx={{
              color: "white",
            }}
          />{" "}
          جاري التحميل...
        </Box>
      ) : (
        children
      )}
    </Button>
  );
}

export default AppButton;
