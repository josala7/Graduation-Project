import { Box, Divider, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/ui/AppButton";
import InputControl from "../../components/ui/form-elements/InputControl";
import { signup } from "../../assets";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  taxNumber: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("برجاء اٍدخال بريد اٍلكتروني بطريفة صحيحة")
    .required("لابد من اٍدخال البريد الاٍلكتروني"),

  password: Yup.string()
    .required("لابد من اٍدخال كلمة السر")
    .min(6, "يجب أن تحتوي كلمة السر على 6 أحرف على الأقل"),

  taxNumber: Yup.number()
    .typeError("برجاء اٍدخال أرقام فقط")
    .required("لابد من اٍدخال الرقم الضريبي")
    .test(
      "len",
      "يجب أن يحتوي الرقم الضريبي على 5 أرقام",
      (val) => val.toString().length === 5
    ),
});

const onSubmit = (values) => {
  console.log(values, "values");
};

function Signup() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <Stack spacing={3} mb={4} width={{ xs: "340px", md: "380px" }}>
                  <Typography variant="h5">اٍنشاء حساب جديد</Typography>

                  <InputControl
                    name="email"
                    label="البريد الالكتروني"
                    placeholder="example@gmail.com"
                    type="text"
                    control={"input"}
                    isRequired
                  />

                  <InputControl
                    name="password"
                    label="كلمة السر"
                    placeholder="•••••••••"
                    type="password"
                    control={"input"}
                    isRequired
                  />

                  <InputControl
                    name="taxNumber"
                    label="الرقم الضريبي"
                    placeholder="574541"
                    type="number"
                    control={"input"}
                    isRequired
                  />
                </Stack>

                <AppButton
                  type="submit"
                  disabled={formik.isSubmitting}
                  fullWidth
                >
                  اٍنشاء الحساب
                </AppButton>
              </Form>
            );
          }}
        </Formik>

        <Divider
          sx={{
            mt: 3,
          }}
        >
          أو
        </Divider>

        <Typography
          sx={{
            mt: 2,
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
    </Box>
  );
}

export default Signup;
