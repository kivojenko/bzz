import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { useAppSettings } from "../model/AppSettings";
import { Bee } from "./basicComponents/background/Bee";

export const Layout = () => {
  const {settings} = useAppSettings();
  return (
    <div data-theme={settings.theme}>
      <Bee id="bee-1"/>
      <Bee id="bee-2"/>
      <div className="container-fluid">
        <Header/>
        <Outlet/>
      </div>
    </div>

  );
};