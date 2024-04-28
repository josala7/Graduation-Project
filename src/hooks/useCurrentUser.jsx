import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiUser";

export const useCurrentUser = () => {
  const token = localStorage.getItem("token");

  const { data, isLoading } = useQuery({
    queryKey: ["currenUser"],
    queryFn: getCurrentUser,
  });

  if (!token) return null;

  return { currentUser: data?.user, isLoading };
};
