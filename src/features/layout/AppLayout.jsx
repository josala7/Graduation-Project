import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Box } from "@mui/material";
import { appStyle } from "../../../styleConfig";
import Header from "./Header";

function AppLayout() {
  return (
    <Box display={"flex"}>
      <SideMenu />
      <Box
        sx={{ width: "100%", mr: "235px", bgcolor: appStyle.mainColor }}
        overflow={"hidden"}
      >
        <Box
          sx={{
            // overflowY: "auto",
            bgcolor: "white",
            m: "15px",
            padding: "25px",
            borderRadius: 5,
            minHeight: "calc(100dvh - 30px)",
          }}
        >
          <Header />

          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;
