import NavigationBar from "@/components/navigation-bar";
import React from "react";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Outlet />
    </React.Fragment>
  );
}
