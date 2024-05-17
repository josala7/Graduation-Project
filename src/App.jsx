import "./App.css";
import AppLayout from "./features/layout/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorFallback from "./components/ui/ErrorFallback";
import { CssBaseline } from "@mui/material";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
// import AppBarTrader from "./components/ui/AppBarTrader";

//  Company Pages
import MainPage from "./features/pages/MainPage";
import Products from "./features/pages/Products";
import Distributors from "./features/pages/Distributors";
import ProductSettings from "./features/pages/ProductSettings";
import Orders from "./features/pages/Orders";

//  Distributers Pages
import TraderPage from "./features/pages/TraderPage";
import TraderProducts from "./features/pages/TraderProducts";
import TraderOrders from "./features/pages/TraderOrders";
import TraderProfile from "./features/pages/TraderProfile";
import TraderProductdetails from "./features/pages/TraderProductdetails";

import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetails from "./features/products/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomInLink from "./features/pages/WelcomInLink";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import TraderLayout from "./features/layout/TraderLayout";
// import UserProfilePage from "./features/user/UserProfilePage";

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
        path: "/companyDashboard",
        element: <MainPage />,
      },
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
        path: "traderDashboard",
        element: <TraderPage />,
      },
      {
        path: "traderProducts",
        element: <TraderProducts />,
      },
      {
        path: "traderOrders",
        element: <TraderOrders />,
      },
      {
        path: "traderProfile",
        element: <TraderProfile />,
      },
      {
        path: "traderproductdetails",
        element: <TraderProductdetails />,
      },
    ],
  },
  // ==================================================
  // {
  //   path: "/yousef",
  //   element: (
  //     <ProtectedRoute>
  //       <CurrentUserProvider>
  //         <TraderLayout />
  //       </CurrentUserProvider>
  //     </ProtectedRoute>
  //   ),
  //   children: [
  //     {
  //       path: "traderpage",
  //       element: <TraderPage />,
  //     },
  //     {
  //       path: "traderProducts",
  //       element: <TraderProducts />,
  //     },
  //     {
  //       path: "traderOrders",
  //       element: <TraderOrders />,
  //     },
  //     {
  //       path: "traderProfile",
  //       element: <TraderProfile />,
  //     },
  //     {
  //       path: "traderproductdetails",
  //       element: <TraderProductdetails />,
  //     },
  //   ],
  // },
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
