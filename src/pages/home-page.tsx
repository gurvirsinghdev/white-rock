import AboveTheFold from "@/components/home/above-the-fold";
import NavigationBar from "@/components/navigation-bar";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <NavigationBar />
      <AboveTheFold />
    </React.Fragment>
  );
}
