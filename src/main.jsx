import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./Home.jsx";
import Menu from "./pages/Menu.jsx";
import Kits from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Purchases from "./pages/Purchases.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connect from "./pages/Connect.jsx";
import store from "./store";
import { Provider } from "react-redux";

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
    path: "/menu/:kit_id",
    element: <Kits />,
  },
  {
    path: "/menu/:kit_id/:item_id",
    element: <Product />,
  },
  {
    path: "/purchases",
    element: <Purchases />,
  },
  {
    path: "/connect/:cafe_id/:table_id",
    element: <Connect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


// 65c25d55b6b3a96794261b9d/