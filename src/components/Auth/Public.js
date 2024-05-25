import React, {useEffect} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {baseUrl, getToken} from "../../Utils/Constant";


const Public = () => {

    return getToken() ? <Navigate to={`${baseUrl}/dashboard`}/> : <Outlet/>
};

export default Public;