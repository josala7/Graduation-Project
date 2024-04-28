import { Box, Divider, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/ui/AppButton";
import InputControl from "../../components/ui/form-elements/InputControl";
import { login as loginImg } from "../../assets";
import { Link } from "react-router-dom";
import { apiLogin } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { errorToast } from "../../utils/toastUtils";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("برجاء اٍدخال بريد اٍلكتروني بطريفة صحيحة")
    .required("لابد من اٍدخال البريد الاٍلكتروني"),

  password: Yup.string()
    .required("لابد من اٍدخال كلمة السر")
    .min(6, "يجب أن تحتوي كلمة السر على 6 أحرف على الأقل"),
});

function Login() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (body) => apiLogin(body),
    onSuccess: () => {
      navigate("/");
      queryClient.setQueryData(["user"]);
    },
    onError: (err) => {
      errorToast(err.response.data.err);
    },
  });

  console.log(isLoading, "isLoadingisLoading");

  const onSubmit = async (values) => {
    try {
      login(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
      }}
    >
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
                  <Typography variant="h5">تسجيل الدخول</Typography>

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
                </Stack>

                <AppButton
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                  fullWidth
                >
                  تسجيل الدخول
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
          لا تملك حساب؟{" "}
          <Box
            component={Link}
            to={"/signup"}
            sx={{
              color: "#333",
              textDecoration: "underline",
            }}
          >
            انشئ حساب جديد
          </Box>
        </Typography>
      </Stack>

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
          <img src={loginImg} alt="login image" />
        </Box>
      </Stack>
    </Box>
  );
}

export default Login;
