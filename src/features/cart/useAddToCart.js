import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorToast, successToast } from "../../utils/toastUtils";
import { axiosPostRequest } from "../../services/requests";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addToCart,
    isPending: isAddingToCart,
    isSuccess: isAddingToCartSuccess,
  } = useMutation({
    mutationFn: (productId) =>
      axiosPostRequest(`cart`, {
        product: productId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      successToast("تم اضافة المنتج اٍلي السلة");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  return { addToCart, isAddingToCart, isAddingToCartSuccess };
};
