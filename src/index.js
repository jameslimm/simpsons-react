import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as appLoader } from "./App";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
  },
  {
    path: ":charShortName",
    element: <App />,
    loader: appLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
