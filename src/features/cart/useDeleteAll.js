import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosDeleteRequest } from "../../services/requests";
import { errorToast, successToast } from "../../utils/toastUtils";

export const useDeleteAll = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deleteAllItem,
    isPending: isDeletingAllItems,
    isSuccess: isDeletingAllItemsSuccess,
  } = useMutation({
    mutationFn: () => axiosDeleteRequest(`cart`),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);

      successToast("تم حذف جميع العناصر بنجاح");
    },
    onError: (err) => {
      errorToast(err);
    },
  });

  return { deleteAllItem, isDeletingAllItems, isDeletingAllItemsSuccess };
};
