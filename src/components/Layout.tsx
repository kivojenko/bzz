import React from 'react'
import {Outlet} from "react-router-dom";
import {Header} from "./header/Header";
import { getTheme, setTheme } from "../service/themeService";

export const Layout = () => {
    setTheme(getTheme());
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <Outlet/>
            </div>
        </>
    );
};