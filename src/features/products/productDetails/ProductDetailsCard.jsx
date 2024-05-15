/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  deleteProductApi,
  updateProductApi,
} from "../../../services/apiProducts";
import { errorToast, successToast } from "../../../utils/toastUtils";
import AppModal from "../../../components/ui/AppModal";
import AddEditProduct from "../AddEditProduct";
import * as Yup from "yup";
import ConfirmModal from "../../../components/ui/ConfirmModal";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  title: Yup.string().required("لابد من اٍدخال اسم المنتج"),
  description: Yup.string().required("لابد من اٍدخال وصف المنتج"),
  price: Yup.number().required("لابد من اٍدخال سعر المنتج"),
});

function ProductDetailsCard({ item }) {
  const [image, setImage] = useState(item?.imageCover);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: deleteProduct,
    isPending: isDeleting,
    isSuccess: isDeleteSuccess,
  } = useMutation({
    mutationFn: (id) => deleteProductApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      successToast("تم حذف المنتج بنجاح"); // Invalidate products query to trigger refetch
      navigate(-1);
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

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Stack position={"relative"} left={{ xs: 0, md: "20%", lg: "15%" }}>
        <Stack
          gap={{ xs: 2, md: 3 }}
          p={{ xs: 2, md: 3 }}
          sx={{
            width: { xs: "330px", md: "350px" },
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
          zIndex={2}
          bgcolor={"white"}
        >
          <Stack display={{ xs: "block", md: "none" }}>
            <Avatar
              src={item?.imageCover}
              alt={item?.imageCover}
              sx={{ width: "100%", height: "100%", borderRadius: 0 }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="h5" fontWeight={"bold"}>
              {item?.title}
            </Typography>

            <Typography variant="body2">
              النوع: {item?.category?.title}
            </Typography>

            <Typography variant="body2">
              البراند: {item?.brand?.title}
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="h7" fontWeight={"bold"}>
              وصف المنتج
            </Typography>
            <Typography variant="body2"> {item?.description}</Typography>
          </Stack>

          <Stack
            spacing={0.5}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>
              <Typography variant="h7">الكمية المتاحة</Typography>
              <Typography variant="body2">
                {item?.quantity - item?.sold}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h7">الكمية المباعة</Typography>
              <Typography variant="body2">{item?.sold}</Typography>
            </Stack>
          </Stack>

          <Stack
            spacing={0.5}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {item?.images?.map((ele) => (
              <Avatar
                onClick={() => {
                  setImage(ele);
                }}
                key={ele}
                src={ele}
                alt={ele}
                sx={{ width: 45, height: 40, cursor: "pointer" }}
                variant="rounded"
              />
            ))}
          </Stack>

          <Stack>
            <Typography variant="h6" fontWeight={"bold"}>
              {`السعر: ${item?.price}$`}
            </Typography>
          </Stack>

          <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
            <Button
              disabled={isDeleting}
              onClick={() => setOpenConfirmModal(true)}
              variant="contained"
              color="error"
            >
              حذف
            </Button>
            <Button
              onClick={() => setOpenEditModal(true)}
              variant="outlined"
              color="warning"
            >
              تعديل
            </Button>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 2.5px 10px;",
            position: "absolute",
            zIndex: 1,
            left: "-40%",
            bgcolor: "white",
            p: 1,
            border: "none",
            outline: "none",
            maxWidth: { xs: 240, sm: 300, md: 400 },
            maxHeight: { xs: 260, sm: 300, md: 400 },
            top: "50%",
            transform: "translate(-50%, -50%)",
            overflow: "hidden",
          }}
        >
          <Avatar
            src={image}
            alt={item?.imageCover}
            sx={{ width: "100%", height: "100%", borderRadius: 0 }}
          />
        </Box>
      </Stack>

      {/* Edit Modal */}
      <AppModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        headerTitle={"تعديل منتج"}
        isSuccess={isUpdatingSuccess}
      >
        <AddEditProduct
          btnLabel="تعديل"
          initialValues={{
            title: item?.title,
            images: item?.images,

            description: item?.description,
            price: item?.price,
            quantity: item?.quantity,
            imageCover: item?.imageCover,
            brand: item?.brand?._id,
            category: item?.category?._id,

            subCategory: item?.subCategory,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const formData = new FormData();
            formData.append("title", values.title);
            updateProduct({
              id: item?._id,
              body: formData,
            });
          }}
          isLoading={isUpdating}
        />
      </AppModal>

      <ConfirmModal
        isSuccess={isDeleteSuccess}
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        isConfirmLoading={isDeleting}
        onConfirm={() => deleteProduct(item._id)}
      />
    </Box>
  );
}

export default ProductDetailsCard;
