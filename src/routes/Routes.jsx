import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetails from "../components/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h1>404 Not found</h1>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("appData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("appData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app-details/:id",
        loader: () => fetch("appData.json"),
        Component: AppDetails,
      },
    ],
  },
]);
