import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@/index.css";
import HomePage from "@/pages/home-page";
import RootLayout from "./pages/root-layout";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
