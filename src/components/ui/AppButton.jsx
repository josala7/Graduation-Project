/* eslint-disable react/prop-types */
import { Button, CircularProgress } from "@mui/material";

function AppButton({ children, onClick, isLoading, ...rest }) {
  return (
    <Button
      {...rest}
      onClick={() => onClick?.()}
      sx={{
        p: isLoading ? "20px" : "5px",
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
      {isLoading ? <CircularProgress size="30px" /> : children}
    </Button>
  );
}

export default AppButton;
