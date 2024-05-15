import { useLocation } from "react-router-dom";
import * as yup from "yup";

import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";

function UserProfilePage() {
  const { state } = useLocation();
  const initialValues = {
    name: state?.name,
    email: state?.email,
    phone: state?.phone,
  };

  console.log(state, "statestate");

  return (
    <Box component={"section"} py={5}>
      <Formik initialValues={initialValues}>
        <Form>
          <Stack
            spacing={3}
            mb={3}
            width={{ xs: "340px", md: "450px" }}
            mx={"auto"}
          >
            <InputControl
              name="name"
              label={state?.role === "company" ? "اسم الشركة" : "اسم الموزع"}
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
              name="phone"
              label="رقم التليفون"
              placeholder="01217522668"
              type="phone"
              control={"input"}
              isRequired
            />
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
}

export default UserProfilePage;
