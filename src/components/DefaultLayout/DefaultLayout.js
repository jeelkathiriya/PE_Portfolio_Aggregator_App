import React,{useState, useEffect} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <Header/>
            <div className={"main-content"}>
                <Outlet/>
            </div>

        </div>
    );
};

export default DefaultLayout;