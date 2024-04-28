/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import AppCardSkeleton from "../../components/skeleton/AppCardSkeleton";
import AppCard from "../../components/ui/AppCard";

function ProductsCardView({ products, isLoading }) {
  return (
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
      {isLoading ? (
        <>
          <AppCardSkeleton />
          <AppCardSkeleton />
          <AppCardSkeleton />
          <AppCardSkeleton />
          <AppCardSkeleton />
          <AppCardSkeleton />
        </>
      ) : (
        products.map((product) => <AppCard item={product} key={product.id} />)
      )}
    </Stack>
  );
}

export default ProductsCardView;
