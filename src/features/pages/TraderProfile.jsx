/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import InputControl from "../../components/ui/form-elements/InputControl";
import { avatar } from "../../assets";
import { useState } from "react";
import { apiLogout } from "../../services/apiAuth";
import {
  BarChart,
  Logout,
  Person,
  Visibility,
  VisibilityOff,
  VpnKey,
} from "@mui/icons-material";
import { useCurrentUser } from "../../hooks/useCurrentUser";

// import Stack from "@mui/material/Stack";
// import avatar from "../../assets/index";

function TraderProfile() {
  const [activeItem, setActiveItem] = useState(0); // State to manage active list item

  const handleItemClick = (index) => {
    setActiveItem(index); // Update active list item
  };

  const { currentUser } = useCurrentUser();

  console.log(currentUser, "currentUsercurrentUsercurrentUser");

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <TraderPhoto />
          <ProfileList activeItem={activeItem} onItemClick={handleItemClick} />
        </Box>
        {activeItem === 0 ? (
          <TraderInfo currentUser={currentUser} />
        ) : activeItem === 1 ? (
          <TraderPassword />
        ) : (
          <TraderStatistics />
        )}
      </Box>
    </Container>
  );
}
function TraderPhoto() {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 4,
        mr: { md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="Trader Profile Picture"
        src={avatar}
        sx={{ width: 116, height: 116 }}
      />
    </Box>
  );
}
function ProfileList({ activeItem, onItemClick }) {
  const navigate = useNavigate();
  const logout = () => {
    apiLogout();
    navigate("/welcomInLink");
  };
  const hoverStyle = {
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "white",
      "& .MuiListItemIcon-root, & .MuiListItemText-root": {
        color: "white",
      },
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 320, md: 260 },
        bgcolor: "#ffff",
        mt: "10px",
        mr: "20px",
        mb: "50px",
        // border: "1px solid #777",
        borderRadius: "9px",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ border: "1px solid #777", borderRadius: "5px" }}>
          <ListItem disablePadding selected={activeItem === 0}>
            <ListItemButton
              onClick={() => onItemClick(0)}
              sx={{ flexDirection: "row-reverse", ...hoverStyle }}
            >
              <ListItemText sx={{ ml: "40px" }} primary="الصفحة الشخصية" />
              <ListItemIcon>
                <Person />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {/* ======================================= */}
          <ListItem disablePadding selected={activeItem === 1}>
            <ListItemButton
              onClick={() => onItemClick(1)}
              sx={{ flexDirection: "row-reverse", ...hoverStyle }}
            >
              <ListItemText sx={{ ml: "50px" }} primary="تغيير كلمة المرور" />
              <ListItemIcon>
                <VpnKey />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {/* ======================================= */}
          <ListItem disablePadding selected={activeItem === 2}>
            <ListItemButton
              onClick={() => onItemClick(2)}
              sx={{ flexDirection: "row-reverse", ...hoverStyle }}
            >
              <ListItemText sx={{ ml: "80px" }} primary="احصائيات" />
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {/* ========================================= */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={logout}
              sx={{ flexDirection: "row-reverse", ...hoverStyle }}
            >
              <ListItemText sx={{ ml: "60px" }} primary="تسجيل الخروج" />
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
function TraderInfo({ currentUser }) {
  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: { xs: 0, md: "20px" },
        marginRight: { xs: 0, md: "200px" },
        mt: { xs: "20px", md: 0 },
      }}
    >
      <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Formik
          initialValues={{
            email: currentUser?.email,
            name: currentUser?.name,
            phoneNumber: currentUser?.phone,
          }}
        >
          {(formik) => {
            return (
              <Form>
                <Stack spacing={3} mb={4} width={{ xs: "340px", md: "380px" }}>
                  <Typography variant="h5">الاعدادات</Typography>

                  <InputControl
                    readOnly
                    name="email"
                    label="البريد الالكتروني"
                    placeholder="example@gmail.com"
                    type="text"
                    control={"input"}
                  />
                  <InputControl
                    readOnly
                    name="name"
                    label="الاسم"
                    placeholder="تايجر"
                    type="text"
                    control={"input"}
                  />
                  <InputControl
                    readOnly
                    name="phoneNumber"
                    label="رقم الموبيل"
                    placeholder="01266598764"
                    type="text"
                    control={"input"}
                  />
                  <Button variant="contained" color="success">
                    تعديل
                  </Button>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Box>
  );
}
function TraderPassword() {
  const [showPass, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: { xs: 0, md: "20px" },
        marginRight: { xs: 0, md: "200px" },
        mt: { xs: "20px", md: 0 },
      }}
    >
      <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Formik>
          {(formik) => {
            return (
              <>
                <Form>
                  <Stack
                    spacing={3}
                    mb={4}
                    width={{ xs: "340px", md: "380px" }}
                  >
                    <Typography variant="h5">الاعدادات</Typography>

                    <InputControl
                      readOnly
                      name="password"
                      label="كلمة السر"
                      placeholder="•••••••••"
                      type="password"
                      control={"input"}
                      // type={showPass ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPass ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <InputControl
                      readOnly
                      name="confirmpassword"
                      label="تاكيد كلمة المرور"
                      placeholder="•••••••••"
                      type="password"
                      control={"input"}
                    />
                    <Button variant="contained" color="success">
                      تعديل
                    </Button>
                  </Stack>
                </Form>
              </>
            );
          }}
        </Formik>
      </Stack>
    </Box>
  );
}

function TraderStatistics() {
  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: { xs: 0, md: "20px" },
        marginRight: { xs: 0, md: "200px" },
        mt: { xs: "20px", md: 0 },
      }}
    >
      <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={3} mb={4} width={{ xs: "340px", md: "380px" }}>
          <Typography variant="h5">الاعدادات</Typography>
          <h3>عدد الطلبيات</h3>
          <p>17</p>
          <h3>المنتجات المفضلة</h3>
          <p>4</p>
          <h3>متوسط الزوار</h3>
          <p>584</p>
        </Stack>
      </Stack>
    </Box>
  );
}
// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });
// function TaxNumber() {
//   return (
//     <div
//       style={{
//         border: "2px solid grey",
//         width: "38%",
//         margin: "10px",
//         display: "flex",
//       }}
//     >
//       <h2 style={{ marginLeft: "70px" }}>الرقم الضريبي</h2>

//       <Button
//         component="label"
//         role={undefined}
//         variant="contained"
//         tabIndex={-1}
//         sx={{ m: "20px" }}
//         startIcon={<CloudUploadIcon sx={{ ml: "30px" }} />}
//       >
//         تحميل الملف
//         <VisuallyHiddenInput type="file" />
//       </Button>
//     </div>
//   );
// }
export default TraderProfile;
