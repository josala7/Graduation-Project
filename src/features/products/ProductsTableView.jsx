/* eslint-disable react/prop-types */
import { Avatar, Stack } from "@mui/material";
import AppTable from "../../components/ui/AppTable";
import DeleteIcon from "../../components/DeleteIcon";
import EditIcon from "../../components/EditIcon";
import AddEditProduct from "./AddEditProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorToast, successToast } from "../../utils/toastUtils";
import { deleteProductApi, updateProductApi } from "../../services/apiProducts";
import { useNavigate } from "react-router-dom";
import ShowIcon from "../../components/ShowIcon";
import { useCurrentUserContext } from "../../context/CurrentUserContext";

function ProductsTableView({ products, isLoading, validationSchema }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { currentUser } = useCurrentUserContext();

  console.log(currentUser, "currentUsercurrentUser");

  const {
    mutate: deleteProduct,
    isPending: isDeleting,
    isSuccess: isDeletingSuccess,
  } = useMutation({
    mutationFn: (id) => deleteProductApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      successToast("تم حذف المنتج بنجاح"); // Invalidate products query to trigger refetch
    },

    onError: (err) => {
      errorToast(err);
    },
  });

  const {
    mutate: updateProduct,
    isPending: isUpdating,
    isSuccess: isUpdatingSuccess,
  } = useMutation({
    mutationFn: async ({ id, body }) => {
      await updateProductApi({ id, body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      successToast("تم تعديل المنتج بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  const columns = [
    {
      name: "صورة المنتج",
      selector: (row) => row.image,

      width: "200px",
      cell: (row) => (
        <Avatar
          src={row.imageCover}
          alt={row.title}
          sx={{ width: 60, height: 60 }}
          variant="rounded"
        />
      ),
    },
    {
      name: "اسم المنتج",
      selector: (row) => row.title,
      width: "200px",
    },
    {
      name: "سعر المنتج",
      selector: (row) => row.price,
      center: true,
      cell: (row) => <div>{`${row.price}$`}</div>,
    },
    {
      name: "الكمية",
      selector: (row) => row.quantity,
      center: true,
    },

    currentUser?.role === "company" && {
      name: "الاجراءات",
      center: true,
      cell: (row) => (
        <Stack direction={"row"} gap={2}>
          <DeleteIcon
            isSuccess={isDeletingSuccess}
            onDelete={() => deleteProduct(row._id)}
            isDeleting={isDeleting}
          />

          <EditIcon
            isSuccess={isUpdatingSuccess}
            modalHeader={"تعديل نوع المنتج"}
            modalContent={
              <AddEditProduct
                btnLabel="تعديل"
                initialValues={{
                  title: row.title,
                  images: row.images,

                  description: row.description,
                  price: row.price,
                  quantity: row.quantity,
                  imageCover: row.imageCover,
                  brand: row.brand,
                  category: row.category,

                  subCategory: row.subCategory,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  const formData = new FormData();
                  formData.append("title", values.title);
                  // if (values.images !== row.images) {
                  //   formData.append("images", values.image);
                  // }
                  updateProduct({
                    id: row._id,
                    body: formData,
                  });
                }}
                isLoading={isUpdating}
              />
            }
          />

          <ShowIcon
            onClick={() => navigate(`/products/${row._id}`, { state: row })}
          />
        </Stack>
      ),
    },

    currentUser?.role === "wholesaler" && {
      name: "اسم الشكركة",
      center: true,
      cell: (row) => (
        <Stack direction={"row"} gap={2}>
          {row?.createdBy?.name || "-"}
        </Stack>
      ),
    },
  ].filter(Boolean);

  return (
    <AppTable columns={columns} data={products || []} isLoading={isLoading} />
  );
}

export default ProductsTableView;
