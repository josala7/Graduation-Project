import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function WelcomInLink() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
        height: "100dvh",
      }}
    >
      <Typography>أهلا بك في لينك</Typography>

      <Stack flexDirection={"row"} gap={5} alignItems={"center"}>
        <Button onClick={() => navigate("/signup", { state: "company" })}>
          شركة
        </Button>
        <Button onClick={() => navigate("/signup", { state: "distributor" })}>
          موزع
        </Button>
      </Stack>
    </Box>
  );
}

export default WelcomInLink;
