import { Box, Collapse, Drawer, List, ListItem, Stack } from "@mui/material";
import { MdHome, MdProductionQuantityLimits } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { appStyle } from "../../../styleConfig";
import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";

const MenuItem = [
  {
    label: "الصفحة الرئيسية",
    url: "/",
    icon: <MdHome fontSize={"20px"} />,
  },
  {
    label: "المنتجات",
    url: "/products",
    icon: <BsBoxSeamFill fontSize={"18px"} />,
  },
  {
    label: "الموزعون",
    url: "/distributors",
    icon: <FaUserCheck fontSize={"20px"} />,
  },
  {
    label: "الطلبات",
    url: "/orders",
    icon: <MdProductionQuantityLimits fontSize={"20px"} />,
  },
  {
    label: "الاٍعدادات",
    url: null,
    icon: <IoSettingsSharp fontSize={"20px"} />,
    children: [
      {
        label: "اٍعدادات الههه",
        url: "/s",
        icon: <IoSettingsSharp fontSize={"20px"} />,
      },
    ],
  },
];

function SideMenu() {
  const [showSubMenuIndex, setShowSubMenuIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setShowSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Drawer
      anchor="right"
      open={true}
      variant="permanent"
      PaperProps={{ elevation: 0 }}
      component={Stack}
      sx={{
        "& .MuiDrawer-paper": {
          width: "235px",
          boxSizing: "border-box",
          px: 1.5,
          py: 3,
          gap: 2,
          bgcolor: appStyle.mainColor,
          color: "white",
        },
      }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Box>Logo</Box>
      </Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        {MenuItem.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              component={NavLink}
              to={item.url}
              onClick={() => toggleSubMenu(index)}
              sx={{
                "&.active": {
                  bgcolor: "#241b5a",
                },
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "6px",
                color: "white",
                ":hover": {
                  bgcolor: "#241b5a",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                {item.icon}
                {item.label}
              </Box>

              {item.children?.length > 0 && (
                <Box sx={{ cursor: "pointer" }}>
                  <FaCaretDown />
                </Box>
              )}
            </ListItem>

            <Collapse
              in={showSubMenuIndex === index}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                {item.children?.map((subItem, subIndex) => (
                  <ListItem
                    key={subIndex}
                    component={NavLink}
                    to={subItem.url}
                    sx={{
                      "&.active": {
                        bgcolor: "#241b5a",
                      },
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "6px",
                      color: "white",
                      ":hover": {
                        bgcolor: "#241b5a",
                      },
                      textAlign: "right",
                      gap: 1.5,
                      paddingInlineStart: "30px",
                    }}
                  >
                    {subItem.icon}
                    {subItem.label}
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default SideMenu;
