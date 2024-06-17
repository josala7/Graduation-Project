import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosGetRequest } from "../../services/requests";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export const useGetOrders = () => {
  const queryClient = useQueryClient();
  const { currentUser } = useCurrentUser();

  const { data, isLoading: isGettingCartItems } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      axiosGetRequest(
        `order/${currentUser?.role === "wholesaler" ? "wholesaler" : "company"}`
      ),
  });

  const orders = data?.orders;

  return {
    queryClient,
    orders,

    data,
    isGettingCartItems,
  };
};
