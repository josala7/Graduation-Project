import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPostRequest } from "../../services/requests";
import { errorToast, successToast } from "../../utils/toastUtils";
import { useNavigate } from "react-router-dom";

export const useMakeOrder = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: makeOrder,
    isPending: isMakingOrder,
    isSuccess: isMakingOrderSuccess,
  } = useMutation({
    mutationFn: (cartId) =>
      axiosPostRequest(`order/${cartId}`, {
        shippingAddress: {
          street: "Mahtat Elramel saad zaghlol",
          city: "Alexandria Egypt",
          phone: "01282219388",
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["order"]);
      successToast("making order done!");
      navigate("/traderOrders");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  return { makeOrder, isMakingOrder, isMakingOrderSuccess };
};
