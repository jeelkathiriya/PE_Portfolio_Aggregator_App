import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import {baseUrl} from "./Utils/Constant";
import {routes} from "./Utils/Routes";
import {ThemeProvider} from "./components/comman/ThemeContext";
import Protected from "./components/Auth/Protected";
import Public from "./components/Auth/Public";
import Login from "./components/Auth/Login/Login";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";

function App() {
  return (

      <BrowserRouter>
        <Routes>
            <Route element={<Protected/>}>

                <Route path={`${baseUrl}/`} element={ <ThemeProvider><DefaultLayout/></ThemeProvider>}>
                    {
                      routes.map((x, i) => {
                        return (
                            <Route exact={true} key={i} path={x.path} element={x.component}/>
                        )
                      })
                    }
                    <Route path={`${baseUrl}/`} element={<Navigate to={`${baseUrl}/dashboard`} replace/>}/>
                  </Route>

            </Route>
            <Route element={<Public/>}>

                <Route path={`${baseUrl}/login`} element={<Login/>}/>
                <Route path={`${baseUrl}/forgot-password`} element={<ForgotPassword/>}/>
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
