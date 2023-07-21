import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { useAppSettings } from "../model/AppSettings";

export const Layout = () => {
  const { settings } = useAppSettings();
  return (
    <div className="container-fluid">
      <div data-theme={settings.theme}>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
};