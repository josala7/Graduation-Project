import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosGetRequest } from "../../services/requests";

export const useGetCartItems = () => {
  const queryClient = useQueryClient();

  const { data, isLoading: isGettingCartItems } = useQuery({
    queryKey: ["cart"],
    queryFn: () => axiosGetRequest("cart"),
  });

  const cartItems = data?.cart?.cartItems;
  const totalPrice = data?.cart?.totalPrice;
  const user = data?.cart?.user;
  const cartId = data?.cart?._id;

  return {
    queryClient,
    cartItems,
    totalPrice,
    user,
    cartId,
    data,
    isGettingCartItems,
  };
};
