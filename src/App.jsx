import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./routing/Routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      <Toaster />
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Routing} />
        </QueryClientProvider>
      </CartProvider>
    </Fragment>
  );
}
