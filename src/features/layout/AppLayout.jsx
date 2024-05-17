import { useCurrentUserContext } from "../../context/CurrentUserContext";
import CompanyLayout from "./CompanyLayout";
import TraderLayout from "./TraderLayout";

function AppLayout() {
  const { currentUser } = useCurrentUserContext();

  const renderdLayout = {
    company: <CompanyLayout />,
    wholesaler: <TraderLayout />,
  };

  return <>{renderdLayout[currentUser?.role]}</>;
}

export default AppLayout;
