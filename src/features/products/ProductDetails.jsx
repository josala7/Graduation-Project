// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

register();

import {
  Button,
  // Button,
  // CardActions,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductText from "../../components/ui/ProductText";
import { useState } from "react";
import ProductDetailsCard from "./productDetails/ProductDetailsCard";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteProductApi } from "../../services/apiProducts";
// import { errorToast, successToast } from "../../utils/toastUtils";
// import DeleteIcon from "../../components/DeleteIcon";

function ProductDetails() {
  const { state } = useLocation();

  const breadcrumbs = [
    <Typography
      component={Link}
      to={"/products"}
      key="1"
      color="text.primary"
      sx={{
        textDecoration: "none",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <BsBoxSeamFill fontSize={"17px"} />
      المنتجات
    </Typography>,
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
      {state?.title}
    </Typography>,
  ];

  return (
    <Stack spacing={4} display={"flex"}>
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <ProductDetailsCard item={state} />
    </Stack>
  );
}

export default ProductDetails;
