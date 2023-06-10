import React from 'react'
import {Outlet} from "react-router-dom";
import {Header} from "./Header";

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