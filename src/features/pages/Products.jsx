import { Box, Pagination, Stack, Typography } from "@mui/material";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { BsBoxSeamFill } from "react-icons/bs";
import { createProduct, getAllProducts } from "../../services/apiProducts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AppModal from "../../components/ui/AppModal";
import { useState } from "react";
import * as Yup from "yup";
import AddEditProduct from "../products/AddEditProduct";
import { errorToast, successToast } from "../../utils/toastUtils";
import TableCardSwitch from "../../components/ui/TableCardSwitch";
import ProductsCardView from "../products/ProductsCardView";
import ProductsTableView from "../products/ProductsTableView";

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
  const [showTable, setShowTable] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () =>
      getAllProducts({
        page: page,
      }),
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
    if (values?.images?.length) {
      values?.images?.map((ele) => formData.append("images", ele));
    }
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

  const totalProducts = data?.totalCount;
  const numOfPages = Math.ceil(totalProducts / 6);

  return (
    <Stack spacing={2}>
      <AppBreadcrumps
        breadcrumbs={breadcrumbs}
        addButton
        onAddButtonClick={() => setAddProductModal(true)}
      />

      <Stack flexDirection={"row"} justifyContent={"flex-end"}>
        <TableCardSwitch setShowTable={setShowTable} showTable={showTable} />
      </Stack>

      {showTable ? (
        <ProductsTableView
          products={data?.allProducts}
          isLoading={isLoading}
          validationSchema={validationSchema}
        />
      ) : (
        <ProductsCardView products={data?.allProducts} isLoading={isLoading} />
      )}

      <Box
        mt={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination
          variant="text"
          shape="rounded"
          size={"medium"}
          color="primary"
          showFirstButton
          showLastButton
          page={page}
          onChange={(e, page) => {
            setPage(page);
          }}
          count={numOfPages}
        />
      </Box>

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
