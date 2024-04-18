/* eslint-disable no-unused-vars */
import AppTable from "../../components/ui/AppTable";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addProductCategory,
  deleteProductCategory,
  getAllProductsCategory,
  updateProductCategory,
} from "../../services/apiProductsCategory";
import { Stack, Box } from "@mui/material";
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

const initialValues = {
  title: "",
  image: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("لابد من اٍدخال نوع المنتج"),
  image: Yup.mixed().required("لابد من اٍدخال صورة المنتج"),
});

function ProductCategory() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["ProductsCategories"],
    queryFn: getAllProductsCategory,
  });

  const { mutate: deleteCategory, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteProductCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsCategories"]);
      successToast("تم حذف نوع المنتج بنجاح"); // Invalidate products query to trigger refetch
    },

    onError: (err) => {
      errorToast(err.response.data.err);
    },
  });

  const { mutate: addCategory, isLoading: isAdding } = useMutation({
    mutationFn: (body) => addProductCategory(body),
    onSuccess: () => {
      successToast("تم اٍضافة نوع المنتج بنجاح");
      queryClient.invalidateQueries(["ProductsCategories"]);
    },

    onError: (err) => {
      errorToast(err.response.data.err);
    },
  });

  const { mutate: updateCategory, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, body }) => {
      updateProductCategory(id, body);
    },
    onSuccess: () => {
      successToast("تم تعديل نوع المنتج بنجاح");
      queryClient.invalidateQueries(["products"]);
      setOpenEditModal(false);
    },

    onError: (err) => {
      errorToast(err.response.data.err);
    },
  });

  const columns = [
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
            onDelete={() => deleteCategory(row._id)}
            isDeleting={isDeleting}
          />

          <EditIcon
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            modalHeader={"تعديل نوع المنتج"}
            modalContent={
              <Formik
                initialValues={{
                  title: row.title,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  updateCategory({ id: row._id, body: values });
                }}
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

                        <AppButton
                          type="submit"
                          disabled={isUpdating}
                          isLoading={isUpdating}
                          fullWidth
                        >
                          تعديل نوع منتج
                        </AppButton>
                      </Stack>
                    </Form>
                  );
                }}
              </Formik>
            }
          />
        </Stack>
      ),
    },
  ];

  return (
    <div>
      <Box display={"flex"} justifyContent={"end"} mb={2}>
        <AddItemButton
          modalContent={
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => addCategory(values)}
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

                      <AppButton
                        type="submit"
                        disabled={isAdding}
                        isLoading={isAdding}
                        fullWidth
                      >
                        أضف نوع منتج
                      </AppButton>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
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
