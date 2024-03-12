import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { MdErrorOutline } from "react-icons/md";

function ErrorMessageComponent({ children }) {
  return (
    <Stack
      direction={"flex"}
      gap={1}
      alignItems={"center"}
      color={red[700]}
      fontSize={"15px"}
    >
      <MdErrorOutline />
      <Typography>{children}</Typography>
    </Stack>
  );
}

export default ErrorMessageComponent;
