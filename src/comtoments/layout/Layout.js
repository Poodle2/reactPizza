import React from "react";
import {Header} from "../Header";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export {Layout}