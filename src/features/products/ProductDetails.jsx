// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
register();

import {
  Button,
  Card,
  CardActions,
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductApi } from "../../services/apiProducts";
import { errorToast, successToast } from "../../utils/toastUtils";
import DeleteIcon from "../../components/DeleteIcon";

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
    <Stack spacing={4}>
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <Card
        sx={{
          p: { xs: 3, md: 4 },
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: 3,
        }}
      >
        <swiper-container
          navigation
          slides-per-view="1"
          speed="500"
          loop="true"
          css-mode="true"
          parallax="true"
        >
          {state?.images?.map((ele) => (
            <swiper-slide
              key={ele}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia component="img" height="400" image={ele} alt={ele} />
            </swiper-slide>
          ))}
        </swiper-container>

        <CardContent component={Stack} fontSize={{ xs: "1rem", sm: "1.25rem" }}>
          <Stack
            py={5}
            display={"grid"}
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={{ xs: 1, sm: 3 }}
          >
            <ProductText
              dir="column"
              keyString="اسم المنتج"
              value={state?.title}
              full
            />
            <ProductText
              keyString="وصف المنتج"
              value={state?.description}
              full
            />

            <ProductText keyString="سعر المنتج" value={`${state?.price} $`} />
            <ProductText
              keyString="الكمية المتاحة من المنتج"
              value={state?.quantity}
            />
            <ProductText
              keyString="عدد المنتجات المٌباعة"
              value={state?.sold}
            />
            <ProductText
              keyString="عدد المنتجات المٌباعة"
              value={state?.sold}
            />
          </Stack>
        </CardContent>

        {/* <CardActions
          sx={{
            gap: 5,
            width: "50%",
          }}
        >
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ width: "100%" }}
          >
            تعديل
          </Button>

          <DeleteIcon
            isSuccess={isDeletingSuccess}
            isDeleting={isDeleting}
            onDelete={() => deleteProduct(state?._id)}
          />
        </CardActions> */}
      </Card>
    </Stack>
  );
}

export default ProductDetails;
