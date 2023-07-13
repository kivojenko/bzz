import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { useAppSettings } from "../model/AppSettings";

export const Layout = () => {
  const { settings } = useAppSettings();
  return (
    <div className={"container-fluid " + settings.animationsEnabled ? "animations-enabled" : "animations-disabled"}
         data-theme={settings.theme}
    >
      <Header/>
      <Outlet/>
    </div>
  );
};