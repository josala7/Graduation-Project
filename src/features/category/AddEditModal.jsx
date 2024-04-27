/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";
import AppButton from "../../components/ui/AppButton";
import { Stack } from "@mui/material";
import { useState } from "react";

function AddEditModal({
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  btnLabel,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form style={{ height: "100%" }}>
            <Stack spacing={3} px={3} height={"100%"} width={"100%"}>
              <InputControl
                name="title"
                label="نوع المنتج"
                placeholder="ادخل نوع المنتج"
                type="text"
                control={"input"}
                isRequired
              />

              <InputControl
                control="fileUpload"
                name="image"
                label={"ارفع صورة"}
              />

              <AppButton
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                fullWidth
              >
                {btnLabel}
              </AppButton>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddEditModal;

{
  /* <label htmlFor="image">صورة المنتج</label>
              <Field type="file" name="image" />
              <ErrorMessage name="image" component="div" /> */
}

{
  /* <FileUpload name="image" setFieldValue={formik.setFieldValue} /> */
}
