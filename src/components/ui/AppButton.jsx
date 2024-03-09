import { Button } from "@mui/material";

function AppButton({ children, fontSize = "16px", onClick }) {
  return (
    <Button
      onClick={() => onClick?.()}
      sx={{
        px: "25px",
        py: "10px",
        fontSize: fontSize,
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
