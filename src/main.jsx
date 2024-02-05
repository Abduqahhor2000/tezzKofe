import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./Home.jsx";
import Menu from "./pages/Menu.jsx"
import Kits from "./pages/Products.jsx"
import Product from "./pages/Product.jsx"
import Purchases from "./pages/Purchases.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/:kits",
    element: <Kits />,
  },
  {
    path: "/menu/:kits/:item",
    element: <Product />,
  },
  {
    path: "/purchases",
    element: <Purchases />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
