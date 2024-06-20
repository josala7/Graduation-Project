import { Skeleton } from "@mui/material";

const OrderSkeleton = () => {
  return (
    <div>
      <Skeleton animation="wave" height={100} />
      <Skeleton animation="wave" height={100} />
      <Skeleton animation="wave" height={100} />
      <Skeleton animation="wave" height={100} />
    </div>
  );
};

export default OrderSkeleton;
