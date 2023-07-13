import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

export const Layout = () => {
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <Outlet/>
            </div>
        </>
    );
};