/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  PopoverPaper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { MdHome, MdProductionQuantityLimits } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaHome, FaUserCheck } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { appStyle } from "../../../styleConfig";
import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";
import { useCurrentUserContext } from "../../context/CurrentUserContext";

function SideMenu({ setMenuOpen, menuOpen }) {
  const { currentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  // menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLessThan600px = useMediaQuery("(max-width:600px)");
  const MenuItem = [
    {
      label: "الصفحة الرئيسية",
      url: "/companyDashboard",
      icon: <MdHome fontSize={"20px"} />,
    },
    {
      label: "المنتجات",
      url: "/products",
      icon: <BsBoxSeamFill fontSize={"18px"} />,
      children: [],
    },
    currentUser?.role === "company" && {
      label: "الموزعون",
      url: "/distributors",
      icon: <FaUserCheck fontSize={"20px"} />,
      children: [],
    },
    {
      label: "الطلبات",
      url: "/orders",
      icon: <MdProductionQuantityLimits fontSize={"20px"} />,
      children: [],
    },
    currentUser?.role === "company" && {
      label: "الاٍعدادات",
      url: "/settings/products",
      icon: <IoSettingsSharp fontSize={"20px"} />,
      children: [
        {
          label: "اٍعدادات المنتجات",
          url: "/settings/products",
          icon: <IoSettingsSharp fontSize={"20px"} />,
        },
      ],
    },
  ].filter(Boolean);

  const [showSubMenuIndex, setShowSubMenuIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setShowSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box position={"relative"}>
      <Drawer
        anchor="right"
        open={{ xs: false, md: true }}
        variant="persistent"
        PaperProps={{ elevation: 0 }}
        component={Stack}
        sx={{
          "& .MuiDrawer-paper": {
            width: menuOpen && !isLessThan600px ? "235px" : "75px",
            boxSizing: "border-box",
            px: 1.5,
            py: 3,
            gap: 2,
            bgcolor: appStyle.mainColor,
            color: "white",
            transition: "0.3s",
            overflow: "hidden",
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
            <React.Fragment key={item.label}>
              <ListItem
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                component={NavLink}
                to={item.url}
                onClick={
                  menuOpen && !isLessThan600px
                    ? () => toggleSubMenu(index)
                    : item?.children?.length
                    ? handleClick
                    : null
                }
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
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                  <ListItemText
                    primary={item.label}
                    sx={{ opacity: menuOpen && !isLessThan600px ? 1 : 0 }}
                  />
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
                        justifyContent:
                          menuOpen && !isLessThan600px
                            ? "space-between"
                            : "center",
                        alignItems: "center",
                        borderRadius: "6px",
                        color: "white",
                        ":hover": {
                          bgcolor: "#241b5a",
                        },
                        textAlign: "right",
                        gap: 1.5,
                        paddingInlineStart: "30px",
                        opacity: menuOpen && !isLessThan600px ? 1 : 0,
                      }}
                    >
                      {subItem.icon}
                      <ListItemText primary={subItem.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                {item.children?.map((subItem, subIndex) => (
                  <Stack
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(subItem.url)}
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={2}
                    flexWrap={"nowrap"}
                    py={0.5}
                    px={2}
                    zIndex={99999}
                    key={subItem.label}
                  >
                    {subItem.label}
                    {subItem.icon}
                  </Stack>
                ))}
              </Menu>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default SideMenu;
