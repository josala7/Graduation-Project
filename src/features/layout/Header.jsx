import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { RiLogoutCircleLine } from "react-icons/ri";
import { apiLogout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";

function Header() {
  const navigate = useNavigate();

  const { currentUser, isLoading } = useCurrentUser();

  const logout = () => {
    apiLogout();
    navigate("/login");
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={5}
      mb={4}
    >
      <Stack direction={"row"} gap={2}>
        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt={currentUser?.name?.toUpperCase()}
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>

        <Stack>
          <Typography variant="body2" fontWeight={"600"}>
            {currentUser?.name}
          </Typography>
          <Typography variant="body2">{currentUser?.email}</Typography>
        </Stack>
      </Stack>

      <Tooltip title="تسجيل الخروج">
        <Box
          sx={{
            cursor: "pointer",
            bgcolor: "rgba(255, 16, 68, 0.2)",
            p: 1,
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={logout}
        >
          <RiLogoutCircleLine fontSize={20} color="#9c1818" />
        </Box>
      </Tooltip>
    </Stack>
  );
}

export default Header;
