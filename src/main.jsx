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
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import Basket from "./pages/Basket.jsx";
import Page404 from "./pages/Page404.jsx";
import { PersistGate } from "redux-persist/integration/react";


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
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/connect/:table_id",
    element: <Connect />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
      <Provider store={store}></Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// 65c25d55b6b3a96794261b9d/
