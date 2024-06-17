import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import { Outlet, useNavigate } from "react-router-dom";
import {
  Avatar,
  ClickAwayListener,
  Grow,
  Menu,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import TraderFooter from "./TraderFooter";
import { apiLogout } from "../../services/apiAuth";
import { logo } from "../../assets/index";

// import { useControls } from "leva";
// import { Canvas } from "@react-three/fiber";
// import {
//   AccumulativeShadows,
//   RandomizedLight,
//   OrbitControls,
//   Environment,
// } from "@react-three/drei";

export default function TraderLayout() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const navigate = useNavigate();
  const logout = () => {
    apiLogout();
    navigate("/welcomInLink");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const [favourite, setFavourite] = React.useState(0);
  // const [cart, setCart] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ marginTop: "50px" }}
    >
      <MenuItem
        //  onClick={handleMenuClose}
        // onClick={() => navigate("/traderProfile")}
        onClick={() => {
          handleMenuClose();
          navigate("/traderProfile");
        }}
      >
        صفحتي
      </MenuItem>

      <MenuItem onClick={logout}>تسجيل الخروج</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            {/* <MailIcon /> */}
            <Favorite />
          </Badge>
        </IconButton>
        <p>المفضلة</p>
      </MenuItem>
      <MenuItem onClick={() => navigate("/traderOrders")}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            {/* <NotificationsIcon /> */}
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>طلباتي</p>
      </MenuItem>
      <MenuItem
        // onClick={handleProfileMenuOpen}
        onClick={() => navigate("/traderProfile")}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>صفحتي</p>
      </MenuItem>
      <MenuItem
        size="large"
        color="inherit"
        // sx={{ marginLeft: "10px" }}
        onClick={logout}
      >
        تسجيل الخروج
      </MenuItem>
    </Menu>
  );
  return (
    <Stack style={{ minHeight: "100dvh" }} justifyContent={"space-between"}>
      <div>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 4 }}
              >
                <MenuIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                          sx={{ mt: "15px" }}
                        >
                          <MenuItem
                            onClick={() => navigate("/traderDashboard")}
                          >
                            الصفحة الرئيسية
                          </MenuItem>
                          <MenuItem onClick={() => navigate("/traderProducts")}>
                            المنتجات
                          </MenuItem>
                          <MenuItem onClick={() => navigate("/traderOrders")}>
                            طلباتي
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <Avatar
                sx={{
                  display: "block",
                  cursor: "pointer",
                  width: "50px", // Set a fixed width
                  height: "50px", // Set a fixed height
                  backgroundPosition: "cover",
                  marginRight: "30px", // Adjust margin
                }}
                variant="rounded"
                onClick={() => navigate("/traderDashboard")}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  right: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  // ml: 9,
                }}
              >
                <div>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      fontSize: "20px",
                      cursor: "pointer",
                      ml: "30px",
                    }}
                    onClick={() => navigate("/traderDashboard")}
                  >
                    الصفحة الرئيسية
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        fontSize: "20px",
                        cursor: "pointer",
                        ml: "30px",
                      },
                    }}
                    onClick={() => navigate("/traderProducts")}
                  >
                    المنتجات
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      fontSize: "20px",
                      cursor: "pointer",
                      mr: "30px",
                    }}
                    onClick={() => navigate("/traderOrders")}
                  >
                    طلباتي
                  </Typography>
                </div>
              </div>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{ display: { xs: "none", md: "flex" }, marginLeft: "20px" }}
              >
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ marginLeft: "20px" }}
                >
                  <Badge badgeContent={4} color="error">
                    {/* <MailIcon /> */}
                    <Favorite />
                  </Badge>
                </IconButton>
                <IconButton
                  onClick={() => navigate("/cart")}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  sx={{ marginLeft: "20px" }}
                >
                  <Badge badgeContent={17} color="error">
                    {/* <NotificationsIcon /> */}
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ marginLeft: "20px" }}
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
        <Outlet />
      </div>
      <div>
        <TraderFooter />
      </div>
    </Stack>
  );
}
