import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Menu from "./pages/Menu.jsx";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import Contact from "./pages/Contact.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Register from "./pages/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      { path: "product/:id", element: <SingleProduct /> },
      { path: "/orders", element: <Orders /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
