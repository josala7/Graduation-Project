import { Autocomplete, Container, Stack, TextField } from "@mui/material";
import { getAllProducts } from "../../services/apiProducts";
import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import * as Yup from "yup";

import TableCardSwitch from "../../components/ui/TableCardSwitch";
import ProductsCardView from "../products/ProductsCardView";
import ProductsTableView from "../products/ProductsTableView";
import AppPagination from "../../components/ui/AppPagination";
import { useCurrentUserContext } from "../../context/CurrentUserContext";

// const initialValues = {
//   title: "",
//   description: "",
//   price: "",
//   quantity: "1",
//   imageCover: "",
//   images: [],
//   brand: "",
//   category: "",

//   subCategory: "",
// };

const validationSchema = Yup.object({
  title: Yup.string().required("لابد من اٍدخال اسم المنتج"),
  description: Yup.string().required("لابد من اٍدخال وصف المنتج"),
  price: Yup.number().required("لابد من اٍدخال سعر المنتج"),
});
function TraderProducts() {
  const options = ["Apple", "Banana", "Orange", "Pineapple", "Strawberry"];
  const [SortBy, SetSortBy] = useState("");
  const [searchValue, setSearchValue] = useState(null);
  console.log(searchValue, "searchValuesearchValue");
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Stack spacing={2} sx={{ width: 400, mt: "40px", mr: "50px" }}>
          {/* Autocomplete with free solo */}
          <Autocomplete
            freeSolo
            options={options}
            renderInput={(params) => (
              <TextField
                label="البحث عن منتجات"
                {...params}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
          />
        </Stack>
        <div style={{ marginTop: "40px", marginRight: "20px" }}>
          <select
            value={SortBy}
            onChange={(e) => SetSortBy(e.target.value)}
            style={{ padding: "13px", width: "500px", borderColor: "grey" }}
          >
            <option value="food">الاطعمة </option>
            <option value="drinks">المشروبات </option>
            <option value="clothes">الملابس </option>
            <option value="devices">الاجهزة </option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Editproducts searchValue={searchValue} />
      </div>
    </Container>
  );
}

function Editproducts({ searchValue }) {
  const { currentUser } = useCurrentUserContext();
  // const [addProductModal, setAddProductModal] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["products", page, currentUser?._i, searchValue],
    queryFn: () =>
      getAllProducts({
        createdBy: currentUser?.role === "company" ? currentUser?._id : null,
        page: page,
        keyword: searchValue,
      }),
  });

  // const queryClient = useQueryClient();

  // const {
  //   mutate: addProduct,
  //   isPending: isAdding,
  //   isSuccess: isAddingSuccess,
  // } = useMutation({
  //   mutationFn: createProduct,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["products"]);
  //     successToast("تم اٍضافة المنتج بنجاح");
  //   },
  //   onError: (err) => {
  //     errorToast(err);
  //   },
  // });

  // const onAddProduct = (values) => {
  //   const formData = new FormData();
  //   formData.append("title", values.title);
  //   formData.append("imageCover", values.imageCover);
  //   if (values?.images?.length) {
  //     values?.images?.map((ele) => formData.append("images", ele));
  //   }
  //   formData.append("description", values.description);
  //   formData.append("price", values.price);
  //   formData.append("quantity", values.quantity);
  //   formData.append("category", values.category);
  //   formData.append("brand", values.brand);

  //   try {
  //     addProduct(formData);
  //   } catch (error) {
  //     console.error("Error updating category:", error.message);
  //   }
  // };

  const totalProducts = data?.totalCount;
  const numOfPages = Math.ceil(totalProducts / 6);

  return (
    <Stack spacing={2}>
      {/* <AppBreadcrumps
        // breadcrumbs={breadcrumbs}
        addButton={currentUser?.role === "company"}
        onAddButtonClick={() => setAddProductModal(true)}
      /> */}

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
      <AppPagination page={page} setPage={setPage} numOfPages={numOfPages} />

      {/* <AppModal
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
      </AppModal> */}
    </Stack>
  );
}

export default TraderProducts;
