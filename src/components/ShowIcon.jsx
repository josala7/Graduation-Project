import { Box } from "@mui/material";
import { FaRegEye } from "react-icons/fa";

function ShowIcon({ onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        color: "#75afc0",
        p: "2px",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#cdeaf1",
        cursor: "pointer",
        fontSize: "18px",
      }}
    >
      <FaRegEye />
    </Box>
  );
}

export default ShowIcon;
