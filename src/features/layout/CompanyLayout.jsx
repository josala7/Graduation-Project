import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Box, useMediaQuery } from "@mui/material";
import { appStyle } from "../../../styleConfig";
import Header from "./Header";
import { useState } from "react";
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";

function CompanyLayout() {
  const [menuOpen, setMenuOpen] = useState(true);
  const isLessThan600px = useMediaQuery("(max-width:600px)");

  return (
    <Box display={"flex"}>
      <Box
        display={!isLessThan600px ? "block" : "none"}
        position={"absolute"}
        right={menuOpen && !isLessThan600px ? "230px" : "65px"}
        top={"20%"}
        zIndex={9999}
        sx={{ transition: "0.3s" }}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen && !isLessThan600px ? (
          <BiSolidRightArrowCircle
            cursor={"pointer"}
            fontSize={40}
            color="#14a06a"
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        ) : (
          <BiSolidLeftArrowCircle
            cursor={"pointer"}
            fontSize={40}
            color="#14a06a"
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        )}
      </Box>
      <SideMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Box
        sx={{
          transition: "0.3s",
          width: "100%",
          mr: menuOpen && !isLessThan600px ? "235px" : "70px",
          bgcolor: appStyle.mainColor,
        }}
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

export default CompanyLayout;
