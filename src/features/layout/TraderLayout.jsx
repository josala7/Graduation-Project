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
import { Menu } from "@mui/material";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import TraderFooter from "./TraderFooter";
import { apiLogout } from "../../services/apiAuth";

export default function TraderLayout() {
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
      <MenuItem onClick={handleMenuClose}>صفحتي</MenuItem>

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
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 4 }}
            >
              <MenuIcon />
              {/* <Menu /> */}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                // display: { xs: "none", sm: "block" },
                fontSize: "25px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/traderDashboard")}
            >
              اللوجو
            </Typography>
            <div
              style={{
                display: "flex",
                position: "relative",
                right: "100px",
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
                  }}
                  onClick={() => navigate("/traderOrders")}
                >
                  طلباتي
                </Typography>
              </div>
            </div>
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}
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
      <TraderFooter />
    </>
  );
}
