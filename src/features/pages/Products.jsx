import { Stack, Typography } from "@mui/material";
import AppCard from "../../components/ui/AppCard";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { BsBoxSeamFill } from "react-icons/bs";
import { createProduct, getAllProducts } from "../../services/apiProducts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AppModal from "../../components/ui/AppModal";
import { useState } from "react";
import * as Yup from "yup";
import AppCardSkeleton from "../../components/ui/AppCardSkeleton";
import AddEditProduct from "../products/AddEditProduct";
import { errorToast, successToast } from "../../utils/toastUtils";

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
  quantity: "1",
  imageCover: "",
  images: [],
  brand: "",
  category: "",

  subCategory: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("لابد من اٍدخال اسم المنتج"),
  description: Yup.string().required("لابد من اٍدخال وصف المنتج"),
  price: Yup.number().required("لابد من اٍدخال سعر المنتج"),
});

function Products() {
  const [addProductModal, setAddProductModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const queryClient = useQueryClient();

  const {
    mutate: addProduct,
    isPending: isAdding,
    isSuccess: isAddingSuccess,
  } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      successToast("تم اٍضافة المنتج بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  const onAddProduct = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("imageCover", values.imageCover);
    formData.append("images", values.imageCover);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("category", values.category);
    formData.append("brand", values.brand);

    try {
      addProduct(formData);
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };

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
        isSuccess={isAddingSuccess}
        open={addProductModal}
        setOpen={setAddProductModal}
        headerTitle="اٍضافة منتج جديد"
      >
        <AddEditProduct
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onAddProduct}
          isLoading={isAdding}
        />
      </AppModal>
    </Stack>
  );
}

export default Products;
