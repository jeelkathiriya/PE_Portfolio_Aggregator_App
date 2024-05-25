import Dashboard from "../components/Dashboard/Dashboard";
import {baseUrl} from "./Constant";
import CompanyDetails from "../components/CompanyDetails/CompanyDetails";
import Login from "../components/Auth/Login/Login";

export const routes = [

    {path: `${baseUrl}/dashboard`, component: <Dashboard/>},
    {path: `${baseUrl}/company/:name`, component: <CompanyDetails/>},
]