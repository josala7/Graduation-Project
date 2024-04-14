import { Stack, Typography } from "@mui/material";
import AppCard from "../../components/ui/AppCard";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { BsBoxSeamFill } from "react-icons/bs";
import { getAllProducts } from "../../services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import AppModal from "../../components/ui/AppModal";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputControl from "../../components/ui/form-elements/InputControl";
import AppButton from "../../components/ui/AppButton";
import AppCardSkeleton from "../../components/ui/AppCardSkeleton";

const breadcrumbs = [
  <Typography
    key="1"
    color="text.primary"
    sx={{
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <BsBoxSeamFill fontSize={"17px"} />
    المنتجات
  </Typography>,
];

const initialValues = {
  title: "",
  description: "",
  price: "",
  quantity: "",
  imageCover: "",
  images: [],
  brand: "[]",
  category: "",

  subCategory: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("لابد من اٍدخال اسم المنتج"),
  description: Yup.string().required("لابد من اٍدخال وصف المنتج"),
  price: Yup.number().required("لابد من اٍدخال سعر المنتج"),
});

const onSubmit = (values) => {
  console.log(values, "values");
};

function Products() {
  const [addProductModal, setAddProductModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <Stack spacing={4}>
      <AppBreadcrumps
        breadcrumbs={breadcrumbs}
        addButton
        onAddButtonClick={() => setAddProductModal(true)}
      />

      <Stack
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
        }}
      >
        {isLoading ? (
          <>
            <AppCardSkeleton />
            <AppCardSkeleton />
            <AppCardSkeleton />
            <AppCardSkeleton />
            <AppCardSkeleton />
            <AppCardSkeleton />
          </>
        ) : (
          data?.allProducts.map((product) => (
            <AppCard item={product} key={product.id} />
          ))
        )}
      </Stack>

      <AppModal
        open={addProductModal}
        setOpen={setAddProductModal}
        headerTitle="اٍضافة منتج جديد"
      >
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

                  <AppButton
                    type="submit"
                    disabled={formik.isSubmitting}
                    fullWidth
                  >
                    اٍنشاء الحساب
                  </AppButton>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </AppModal>
    </Stack>
  );
}

export default Products;
