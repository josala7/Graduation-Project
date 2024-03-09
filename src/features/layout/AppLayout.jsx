import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Box } from "@mui/material";
import { appStyle } from "../../../styleConfig";

function AppLayout() {
  return (
    <Box display={"flex"}>
      <SideMenu />
      <Box sx={{ width: "100%", mr: "235px", bgcolor: appStyle.mainColor }}>
        <Box
          sx={{
            overflowY: "auto",
            bgcolor: "white",
            m: "15px",
            padding: "20px",
            borderRadius: 5,
            height: "calc(100dvh - 30px)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;
