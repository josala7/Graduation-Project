/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";
import * as Yup from "yup";
import { errorToast } from "../../utils/toastUtils";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSignUp } from "../../services/apiAuth";
import AppButton from "../../components/ui/AppButton";

const initialValues = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
  phone: "",
  role: "wholesaler",
};

const validationSchema = Yup.object({
  name: Yup.string().required("لابد من اٍدخال اسم الشركة"),

  email: Yup.string()
    .email("برجاء اٍدخال بريد اٍلكتروني بطريفة صحيحة")
    .required("لابد من اٍدخال البريد الاٍلكتروني"),

  password: Yup.string()
    .required("لابد من اٍدخال كلمة السر")
    .min(6, "يجب أن تحتوي كلمة السر على 6 أحرف على الأقل"),

  rePassword: Yup.string()
    .required("لابد من اٍدخال كلمة السر")
    .oneOf([Yup.ref("password")], "يجب أن تتطابق كلمتا السر"),

  phone: Yup.number().required("لابد من اٍدخال رقم الهاتف"),
});

function DistributorSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: (body) => apiSignUp(body),
    onSuccess: () => {
      navigate("/traderDashboard");
      queryClient.setQueryData(["user"]);
    },
    onError: (err) => {
      errorToast(err);
    },
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => signUp(values)}
    >
      <Form>
        <Typography variant="h5" mb={2}>
          اٍنشاء حساب جديد
        </Typography>

        <Stack spacing={1} mb={3} width={{ xs: "340px", md: "380px" }}>
          <InputControl
            name="name"
            label="اسم الموزع"
            placeholder="tiger"
            type="text"
            control={"input"}
            isRequired
          />
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
            name="rePassword"
            label="اعد ادخال كلمة السر"
            placeholder="•••••••••"
            type="rePassword"
            control={"input"}
            isRequired
          />

          <InputControl
            name="phone"
            label="رقم التليفون"
            placeholder="01217522668"
            type="phone"
            control={"input"}
            isRequired
          />
        </Stack>

        <AppButton
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          fullWidth
        >
          اٍنشاء الحساب
        </AppButton>
      </Form>
    </Formik>
  );
}

export default DistributorSignup;
