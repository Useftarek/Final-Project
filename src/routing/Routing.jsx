import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../Pages/homePage/HomePage";
import ProductDetailsPage from "../Pages/productDetailsPage/ProductDetailsPage";

export const Routing = createBrowserRouter([
    {path: "/", element: <Layout  /> , children: [

        {index: true, element: <HomePage />},
        {path: "/ProductDetails", element: <ProductDetailsPage />}
    ]},
    
    ])