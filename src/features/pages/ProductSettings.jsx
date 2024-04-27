import { Stack, Typography } from "@mui/material";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { IoSettingsSharp } from "react-icons/io5";
import AppTabs from "../../components/ui/AppTabs";
import { BiCategory } from "react-icons/bi";
import ProductCategory from "../category/ProductCategory";
import ProductBrand from "../brand/ProductBrand";
function ProductSettings() {
  const breadcrumbs = [
    <Typography
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
      <IoSettingsSharp fontSize={"17px"} />
      الاٍعدادات
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
      اٍعدادات المنتجات
    </Typography>,
  ];

  const tabs = [
    {
      q: "category",
      tabName: "نوع المنتج",
      tabContent: <ProductCategory />,
    },
    {
      q: "brand",
      tabName: "البراند",
      tabContent: <ProductBrand />,
    },
  ];
  return (
    <Stack spacing={4}>
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <AppTabs tabs={tabs} />
    </Stack>
  );
}

export default ProductSettings;
