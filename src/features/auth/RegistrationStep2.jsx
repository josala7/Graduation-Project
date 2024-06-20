/* eslint-disable no-unused-vars */
import { Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";
import * as Yup from "yup";
import { errorToast } from "../../utils/toastUtils";
import AppButton from "../../components/ui/AppButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSignUp } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const initialValues = {
  phone: "",

  // taxNumber: "",
};

const validationSchema = Yup.object({
  phone: Yup.number().required("لابد من اٍدخال رقم الهاتف"),
  // taxNumber: Yup.number().required("لابد من اٍدخال الرقم الضريبي للشركة"),
});

/* eslint-disable react/prop-types */
function RegistrationStep2({ next, back, setSignUpdata, signupData }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: (body) => apiSignUp(body),
    onSuccess: (data) => {
      const currentUser = jwtDecode(data?.token);
      if (currentUser?.role === "company") {
        navigate("/companyDashboard");
      } else {
        navigate("/traderDashboard");
      }

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
      onSubmit={(values) => {
        const data = { ...signupData, ...values, role: "company" };

        signUp(data);
      }}
    >
      <Form>
        <Typography variant="h5" mb={5}>
          اٍنشاء حساب جديد
        </Typography>

        <Stack spacing={1} mb={1} width={{ xs: "340px", md: "380px" }}>
          <InputControl
            name="phone"
            label="رقم التليفون"
            placeholder="01217522668"
            type="phone"
            control={"input"}
            isRequired
          />

          {/* <InputControl
            name="taxNumber"
            label="الرقم الضريبي"
            placeholder="10255"
            type="taxNumber"
            control={"input"}
            isRequired
          /> */}
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

export default RegistrationStep2;
