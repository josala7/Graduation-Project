import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, direction: "rtl" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#2a2069" }}>
        <Toolbar>
          {/* Right Section */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "right",
              cursor: "pointer",
              mr: "60px",
            }}
          >
            اللوجو
          </Typography>

          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <div style={{ display: "flex", gap: '20px' }}>
              <Button
                variant="contained"
                onClick={() => navigate("/signup", { state: "company" })}
              >
                الشركة
              </Button>
              <Button
               color="success"
               variant="contained"
                onClick={() => navigate("/signup", { state: "distributor" })}
              >
                التاجر
              </Button>
            </div>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                right: "150px",
              }}
            >
              <IconButton color="inherit">
                <Typography
                  variant="caption"
                  color="white"
                  sx={{ marginLeft: 1.5 }}
                >
                  المفضلة
                </Typography>
                <Badge badgeContent={0} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Typography
                  variant="caption"
                  color="white"
                  sx={{ marginLeft: 1.5 }}
                >
                  سلة التسوق
                </Typography>
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginRight: 3,
                position: "relative",
                left: "800px",
              }}
            >
              <Typography
                variant="h6"
                color="inherit"
                sx={{ padding: "12px", cursor: "pointer" }}
              >
                الرئيسية
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                sx={{ padding: "12px", cursor: "pointer" }}
              >
                المنتجات
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                sx={{ padding: "12px", cursor: "pointer" }}
              >
                طلبياتى
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
