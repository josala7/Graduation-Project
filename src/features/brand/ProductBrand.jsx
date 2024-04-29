/* eslint-disable no-unused-vars */
import AppTable from "../../components/ui/AppTable";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addProductBrand,
  deleteProductBrand,
  getAllProductsBrand,
  updateProductBrand,
} from "../../services/apiProductBrand";
import { Stack, Box, Avatar } from "@mui/material";
import DeleteIcon from "../../components/DeleteIcon";
import { errorToast, successToast } from "../../utils/toastUtils";
import AddItemButton from "../../components/ui/AddItemButton";
import * as Yup from "yup";
import EditIcon from "../../components/EditIcon";
import AddEditModal from "./AddEditModal";

const initialValues = {
  title: "",
  image: "",
  category: "",
};

const validationSchema = Yup.object({
  // title: Yup.string().required("لابد من اٍدخال اسم البراند"),
  // category: Yup.string().required("لابد من اختيار نوع المنتج"),
  // image: Yup.mixed().required("لابد من اٍدخال صورة المنتج"),
});

function ProductBrand() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["ProductsBrand"],
    queryFn: getAllProductsBrand,
  });

  const {
    mutate: deleteBrand,
    isPending: isDeleting,
    isSuccess: isDeletingSuccess,
  } = useMutation({
    mutationFn: (id) => deleteProductBrand(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsBrand"]);
      successToast("تم حذف نوع المنتج بنجاح"); // Invalidate products query to trigger refetch
    },

    onError: (err) => {
      errorToast(err);
    },
  });

  const {
    mutate: addBrand,
    isPending: isAdding,
    isSuccess: isAddingSuccess,
  } = useMutation({
    mutationFn: addProductBrand,
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsBrand"]);
      successToast("تم اٍضافة براند بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  const {
    mutate: updateBrand,
    isPending: isUpdating,
    isSuccess: isUpdatingSuccess,
  } = useMutation({
    mutationFn: async ({ id, body }) => {
      await updateProductBrand({ id, body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["ProductsBrand"]);
      successToast("تم تعديل البراند بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  const columns = [
    {
      name: "صورة البراند",
      selector: (row) => row.logo,

      width: "200px",
      cell: (row) => (
        <Avatar
          src={row.logo}
          alt={row.title}
          sx={{ width: 60, height: 60 }}
          variant="rounded"
        />
      ),
    },
    {
      name: "البراند",
      selector: (row) => row.title,
    },

    {
      name: "الاجراءات",
      center: true,
      cell: (row) => (
        <Stack direction={"row"} gap={2}>
          <DeleteIcon
            isSuccess={isDeletingSuccess}
            onDelete={() => deleteBrand(row._id)}
            isDeleting={isDeleting}
          />

          <EditIcon
            isSuccess={isUpdatingSuccess}
            modalHeader={"تعديل البراند"}
            modalContent={
              <AddEditModal
                btnLabel="تعديل"
                initialValues={{
                  title: row.title,
                  category: row.category,
                  image: row.logo,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  const formData = new FormData();
                  if (values.title !== row.title) {
                    formData.append("title", values.title);
                  }
                  formData.append("category", values.category);
                  if (values.image !== row.logo) {
                    formData.append("image", values.image);
                  }
                  updateBrand({
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
    console.log(values, "valuesvalues");
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("image", values.image);

    addBrand(formData);
  };

  return (
    <div>
      <Box display={"flex"} justifyContent={"end"} mb={2}>
        <AddItemButton
          isSuccess={isAddingSuccess}
          modalContent={
            <AddEditModal
              btnLabel="أضف براند"
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleAddSubmit(values)}
              isLoading={isAdding}
            />
          }
        >
          أضف براند
        </AddItemButton>
      </Box>
      <AppTable
        columns={columns}
        data={data?.allBrands || []}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ProductBrand;
