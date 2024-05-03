/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";
import * as Yup from "yup";
import { errorToast } from "../../utils/toastUtils";

const initialValues = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
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
});

function RegistrationStep1({ next, setSignUpdata, signupData }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        if (
          !values.name ||
          !values.email ||
          !values.password ||
          !values.rePassword
        ) {
          errorToast("برجاء ملئ جميع البيانات المطلوبة");
        } else {
          await setSignUpdata({ ...values });
          next();
        }
      }}
    >
      <Form>
        <Typography variant="h5" mb={5}>
          اٍنشاء حساب جديد
        </Typography>

        <Stack spacing={1} mb={1} width={{ xs: "340px", md: "380px" }}>
          <InputControl
            name="name"
            label="اسم الشركة"
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
        </Stack>

        <Button
          type="submit"
          variant={"contained"}
          fullWidth
          sx={{
            textTransform: "none",
            mt: 3,
            borderRadius: 1,
            padding: "12px 24px",
            lineHeight: "18px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontSize: "16px",
            borderColor: "transparent",
          }}
        >
          التالي
        </Button>
      </Form>
    </Formik>
  );
}

export default RegistrationStep1;
