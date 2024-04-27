/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";
import AppButton from "../../components/ui/AppButton";
import { Stack } from "@mui/material";
import FileUpload from "../../components/ui/form-elements/FileUpload";
import { getAllProductsCategory } from "../../services/apiProductsCategory";
import { useQuery } from "@tanstack/react-query";

function AddEditModal({
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  btnLabel,
}) {
  const { data, isLoading: isGettingCatrgories } = useQuery({
    queryKey: ["ProductsCategories"],
    queryFn: getAllProductsCategory,
  });

  const options = data?.categories.map((option) => {
    return {
      label: option.title,
      valie: option._id,
    };
  });
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
                label="البراند"
                placeholder="ادخل البراند"
                type="text"
                control={"input"}
                isRequired
              />

              <InputControl
                name="category"
                label="اختر المنتج الرئيسي"
                placeholder="اختر المنتج"
                type="text"
                control={"select"}
                options={options}
                isRequired
              />

              <FileUpload name="image" label={"ارفع صورة"} />

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
