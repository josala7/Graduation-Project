/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

function AppButton({ children, onClick, ...rest }) {
  return (
    <Button
      {...rest}
      onClick={() => onClick?.()}
      sx={{
        p: "5px",
        px: "30px",
        // borderRadius: 3,
        fontSize: "16px",
        bgcolor: "#1cc182",
        color: "white",
        ":hover": {
          bgcolor: "#14a06a",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default AppButton;
