/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import AppButton from "../../components/ui/AppButton";
import InputControl from "../../components/ui/form-elements/InputControl";
import { Stack } from "@mui/material";
import { getAllProductsCategory } from "../../services/apiProductsCategory";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsBrand } from "../../services/apiProductBrand";

function AddEditProduct({
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  btnLabel = "اٍنشاء منتج",
}) {
  // getAllCategories
  const { data, isLoading: isGettingCatrgories } = useQuery({
    queryKey: ["ProductsCategories"],
    queryFn: getAllProductsCategory,
  });

  const categoriesOptions = data?.categories.map((option) => {
    return {
      label: option.title,
      value: option._id,
    };
  });

  // getAllBrands
  const { data: brandsData, isLoading: isGettingBrands } = useQuery({
    queryKey: ["ProductsBrands"],
    queryFn: getAllProductsBrand,
  });

  const brandOptions = brandsData?.allBrands.map((option) => {
    return {
      label: option.title,
      value: option._id,
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
                label="اسم المنتج"
                placeholder="ادخل اسم المنتج"
                type="text"
                control={"input"}
                isRequired
              />

              <InputControl
                name="description"
                label="وصف المنتج"
                placeholder="ادخل وصف المنتج"
                type="text"
                control={"input"}
                isRequired
              />

              <InputControl
                name="price"
                label="سعر القطعة الواحدة"
                placeholder="50$"
                type="number"
                control={"input"}
                isRequired
              />

              <InputControl
                name="quantity"
                label="الكمية"
                placeholder="5"
                type="number"
                control={"input"}
                isRequired
              />

              <InputControl
                name="category"
                label="اختر المنتج الرئيسي"
                placeholder="اختر المنتج"
                control={"select"}
                options={categoriesOptions}
                isRequired
              />

              <InputControl
                name="brand"
                label="اختر البراند"
                placeholder="اختر البراند"
                control={"select"}
                options={brandOptions}
                isRequired
              />

              <InputControl
                control="fileUpload"
                name="imageCover"
                label={"ارفع صورة"}
              />

              <InputControl
                control="multipleFileUpload"
                name="images"
                label={"ارفع اكثر من صورة"}
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

export default AddEditProduct;
