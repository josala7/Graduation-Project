/* eslint-disable no-unused-vars */
import AppTable from "../../components/ui/AppTable";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addProductCategory,
  deleteProductCategory,
  getAllProductsCategory,
  updateProductCategory,
} from "../../services/apiProductsCategory";
import { Stack, Box, Avatar } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import DeleteIcon from "../../components/DeleteIcon";
import { errorToast, successToast } from "../../utils/toastUtils";
import AddItemButton from "../../components/ui/AddItemButton";
import { Form, Formik } from "formik";
import InputControl from "../../components/ui/form-elements/InputControl";
import * as Yup from "yup";
import AppButton from "../../components/ui/AppButton";
import EditIcon from "../../components/EditIcon";
import { useState } from "react";
import FileInput from "../../components/ui/form-elements/FileUpload";
import AddEditModal from "./AddEditModal";

const initialValues = {
  title: "",
  image: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("لابد من اٍدخال نوع المنتج"),
  // image: Yup.mixed().required("لابد من اٍدخال صورة المنتج"),
});

function ProductCategory() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["ProductsCategories"],
    queryFn: getAllProductsCategory,
  });

  const {
    mutate: deleteCategory,
    isPending: isDeleting,
    isSuccess: isDeletingSuccess,
  } = useMutation({
    mutationFn: (id) => deleteProductCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsCategories"]);
      successToast("تم حذف نوع المنتج بنجاح"); // Invalidate products query to trigger refetch
    },

    onError: (error) => {
      errorToast(error);
    },
  });

  const {
    mutate: addCategory,
    isPending: isAdding,
    isSuccess: isAddingSuccess,
  } = useMutation({
    mutationFn: addProductCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsCategories"]);
      successToast("تم اٍضافة نوع المنتج بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  const {
    mutate: updateCategory,
    isPending: isUpdating,
    isSuccess: isUpdatingSuccess,
  } = useMutation({
    mutationFn: async ({ id, body }) => {
      await updateProductCategory({ id, body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsCategories"]);
      successToast("تم تعديل نوع المنتج بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  const columns = [
    {
      name: "صورة نوع المنتج",
      selector: (row) => row.image,

      width: "200px",
      cell: (row) => (
        <Avatar
          src={row.image}
          alt={row.title}
          sx={{ width: 60, height: 60 }}
          variant="rounded"
        />
      ),
    },
    {
      name: "نوع المنتج",
      selector: (row) => row.title,
    },

    {
      name: "الاجراءات",
      center: true,
      cell: (row) => (
        <Stack direction={"row"} gap={2}>
          <DeleteIcon
            isSuccess={isDeletingSuccess}
            onDelete={() => deleteCategory(row._id)}
            isDeleting={isDeleting}
          />

          <EditIcon
            isSuccess={isUpdatingSuccess}
            modalHeader={"تعديل نوع المنتج"}
            modalContent={
              <AddEditModal
                btnLabel="تعديل"
                initialValues={{
                  title: row.title,
                  image: row.image,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  const formData = new FormData();
                  formData.append("title", values.title);
                  if (values.image !== row.image) {
                    formData.append("image", values.image);
                  }
                  updateCategory({
                    id: row._id,
                    body: formData,
                  });
                }}
                isLoading={isUpdating}
              />
            }
          />
        </Stack>
      ),
    },
  ];

  const handleAddSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    if (values.image) {
      formData.append("image", values.image);
    }
    try {
      addCategory(formData);
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };

  return (
    <div>
      <Box display={"flex"} justifyContent={"end"} mb={2}>
        <AddItemButton
          isSuccess={isAddingSuccess}
          modalContent={
            <AddEditModal
              btnLabel=" أضف نوع منتج"
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleAddSubmit(values)}
              isLoading={isAdding}
            />
          }
        >
          أضف نوع منتج
        </AddItemButton>
      </Box>
      <AppTable
        columns={columns}
        data={data?.categories || []}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ProductCategory;
