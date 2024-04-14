import { Stack, Typography } from "@mui/material";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();

  console.log(state, "statestate");

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
    </Stack>
  );
}

export default ProductDetails;
