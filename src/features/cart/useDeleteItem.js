import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosDeleteRequest } from "../../services/requests";
import { errorToast, successToast } from "../../utils/toastUtils";

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deleteItem,
    isPending: isDeletingItem,
    isSuccess: isDeletingItemSuccess,
  } = useMutation({
    mutationFn: (itemId) => axiosDeleteRequest(`cart/${itemId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      successToast("تم حذف العنصر بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  return { deleteItem, isDeletingItem, isDeletingItemSuccess };
};
