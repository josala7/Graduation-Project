import { useLocation } from "react-router-dom";

function UserProfilePage() {
  const { state } = useLocation();
  return <div>{state?.name}</div>;
}

export default UserProfilePage;
