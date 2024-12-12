import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../Pages/homePage/HomePage";
import ProductDetailsPage from "../Pages/productDetailsPage/ProductDetailsPage";
import CategoryPage from "../Pages/categoryPage/CategoryPage";
import CartPage from "../Pages/cartPage/CartPage";
import Login from "../Pages/loginPage/Login";
import Register from "../Pages/register/Register";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/ProductDetailsPage/:id", element: <ProductDetailsPage /> },
      { path: "/category", element: <CategoryPage /> },
      { path: "/cart", element: <CartPage /> },
      {path: "/login", element: <Login />},
      {path: "/regitser", element: <Register />}
    ],
  },
]);
