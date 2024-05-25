import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {baseUrl, getToken} from "../../Utils/Constant";

const Protected = () => {
    return getToken() ? <Outlet/> : <Navigate to={`${baseUrl}/login`}/>
};

export default Protected;
