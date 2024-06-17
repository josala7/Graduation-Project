import { Button, Box, styled, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import light from "../../assets";

const AppButton = styled(Button)(({ theme }) => ({
  padding: "20px",
  width: "80%",
}));

const AccessContainer = styled(Box)(({ theme }) => ({
  marginTop: "60px",
  // backgroundImage: `url(${light})`,
  backgroundSize: "cover",
  height: "35vh",
  width: "100%",
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

const AccTalk = styled(Box)(({ theme }) => ({
  padding: "47px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const AccessBtnContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "12px",
  left: "30%",
  width: "23%",
  [theme.breakpoints.down("lg")]: {
    left: "-3%",
  },
  [theme.breakpoints.down("sm")]: {
    left: "28%",
    width: "50%",
    height: "200px",
  },
}));

function LandingAccess() {
  const navigate = useNavigate();
  return (
    <AccessContainer id="participate">
      <Container>
        <AccTalk>
          <h1>
            هل انت جاهز للاشتراك الان ؟
            <br />
            بناء علي جهتك اختر من تكون
          </h1>
        </AccTalk>
        <AccessBtnContainer>
          <AppButton
            style={{
              backgroundColor: "purple",
              marginLeft: "20px",
              color: "white",
            }}
            variant="outlined"
            size="large"
            onClick={() => navigate("/signup", { state: "company" })}
          >
            الشركة
          </AppButton>
          <AppButton
            variant="outlined"
            size="large"
            onClick={() => navigate("/signup", { state: "distributor" })}
          >
            التاجر
          </AppButton>
          {/* <Button onClick={() => navigate("/signup", { state: "company" })}>
            شركة
          </Button>
          <Button onClick={() => navigate("/signup", { state: "distributor" })}>
            موزع
          </Button> */}
        </AccessBtnContainer>
      </Container>
    </AccessContainer>
  );
}

export default LandingAccess;
