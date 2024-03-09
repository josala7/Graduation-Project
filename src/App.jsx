import "./App.css";
import AppLayout from "./features/layout/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorFallback from "./components/ui/ErrorFallback";
import { CssBaseline } from "@mui/material";
import Products from "./features/pages/Products";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Settings from "./features/pages/Settings";
import Distributors from "./features/pages/Distributors";
import Orders from "./features/pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/distributors",
        element: <Distributors />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
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
    </>
  );
}

export default App;
