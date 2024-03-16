import { Stack, Typography } from "@mui/material";
import AppCard from "../../components/ui/AppCard";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { BsBoxSeamFill } from "react-icons/bs";

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

function Products() {
  return (
    <Stack spacing={4}>
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <Stack
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
        }}
      >
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </Stack>
    </Stack>
  );
}

export default Products;
