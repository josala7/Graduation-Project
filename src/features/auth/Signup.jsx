import { Box, Divider, Stack, Typography } from "@mui/material";
import { signup } from "../../assets";
import { useState } from "react";
import RegistrationStep1 from "./RegistrationStep1";
import RegistrationStep2 from "./RegistrationStep2";
import { Link, useLocation } from "react-router-dom";
import DistributorSignup from "./DistributorSignup";

function Signup() {
  const { state } = useLocation();

  const [signupData, setSignUpdata] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
    // taxNumber: "",
  });

  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const renderdSignup = {
    company: (
      <>
        {step === 1 && (
          <RegistrationStep1
            next={next}
            setSignUpdata={setSignUpdata}
            signupData={signupData}
          />
        )}
        {step === 2 && (
          <RegistrationStep2
            back={back}
            next={next}
            setSignUpdata={setSignUpdata}
            signupData={signupData}
          />
        )}
      </>
    ),

    distributor: <DistributorSignup />,
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100dvh",
        display: "flex",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        display={{ xs: "none", md: "flex" }}
        flex={1}
        sx={{
          background:
            "linear-gradient(90deg,#FAFAFA 21px,transparent 1%) center,linear-gradient(#FAFAFA 21px,transparent 1%) center,#000;",
          backgroundSize: "22px 22px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "90%",
              md: "500px",
            },
            height: {
              xs: 300,
              md: 500,
            },
          }}
          position="relative"
        >
          <img src={signup} alt="signup image" />
        </Box>
      </Stack>

      <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Stack flexBasis={"40%"} spacing={1} py={5}>
          {renderdSignup[state]}
          <Divider
            sx={{
              mt: 1,
            }}
          >
            أو
          </Divider>

          <Typography
            sx={{
              mt: 1,
              textAlign: "center",
              fontWeight: "bold",
              color: "#757575",
            }}
          >
            هل تمتلك حساب بالفعل ؟{" "}
            <Box
              component={Link}
              to={"/login"}
              sx={{
                color: "#333",
                textDecoration: "underline",
              }}
            >
              تسجيل الدخول
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Signup;

