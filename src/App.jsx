import "./App.css";
import AppLayout from "./features/layout/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorFallback from "./components/ui/ErrorFallback";
import { CssBaseline } from "@mui/material";
import Products from "./features/pages/Products";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Distributors from "./features/pages/Distributors";
import Orders from "./features/pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetails from "./features/products/ProductDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductSettings from "./features/pages/ProductSettings";
import WelcomInLink from "./features/pages/WelcomInLink";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import UserProfilePage from "./features/user/UserProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <CurrentUserProvider>
          <AppLayout />
        </CurrentUserProvider>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "distributors",
        element: <Distributors />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "/settings/products",
        element: <ProductSettings />,
      },

      {
        path: "products/:productId",
        element: <ProductDetails />,
      },

      {
        path: "/profilePage",
        element: <UserProfilePage />,
      },
    ],
  },
  {
    path: "/welcomInLink",
    element: <WelcomInLink />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <ErrorFallback />,
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
