import React, {useState} from 'react';
import {Form, Button, InputGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

import loginSide from "../../../img/loginSide.png"
import {baseUrl} from "../../../Utils/Constant";

const initialState = {email: "", password: ""}
const Login = () => {
    const [loginDetail, setLoginDetail] = useState(initialState);
    const [loginError, setLoginError] = useState(initialState);
    const [showPassword, setShowPassword] = useState("password");
    const navigate = useNavigate();

    const formValidation = (name, value) => {
        switch (name) {
            case "email":
                if (!value.trim()) {
                    return "Email is required.";
                } else if (!value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/)) {
                    return "Enter a valid email address";
                } else {
                    return "";
                }
            case "password":
                if (!value.trim()) {
                    return "Password is required.";
                } else {
                    return "";
                }
            default: {
                return "";
            }
        }
    }

    const handleBlur = (e) => {
        const {value, name} = e.target;
        setLoginError({...loginError, [name]: formValidation(name, value)});
    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginDetail({...loginDetail, [name]: value});
    };

    const handleLogin = async () => {
        let errorData = {};
        Object.keys(loginDetail).map((x) => {
            let error = formValidation(x, loginDetail[x]);
            if (error && error.length > 0) {
                errorData[x] = error;
            }
        });
        if (Object.keys(errorData).length > 0) {
            setLoginError(errorData);
            return;
        }
        localStorage.setItem("token", "aaa")
        navigate(`${baseUrl}/dashboard`)

    }

    return (
        <div className="auth">
            <div className={"row"}>
                <div className={"col col-md-5 col-12"}>
                    <div className={"auth-banner-img"}>
                        <img src={loginSide}/>
                    </div>

                </div>
                <div className={"col col-md-7 col-12"}>
                    <div className="auth-sidebar">
                        <div className="auth-content">
                            <h1>Sign In</h1>
                            <svg width="30" height="1" viewBox="0 0 30 1" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 0H0V1H30V0Z" fill="#707070"/>
                            </svg>

                            <div className="auth-form">
                                <div className="row row-10">
                                    <div className="col col-6">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Your email</Form.Label>
                                            <Form.Control
                                                name={"email"}
                                                placeholder={"Email"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={loginDetail.email}
                                                type={"text"}
                                                className={""}
                                                error={loginError.email}
                                            />
                                        </Form.Group>

                                    </div>
                                    <div className="col col-6">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup >
                                                <Form.Control
                                                    name={"password"}
                                                    placeholder={"Password"}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={loginDetail.password}
                                                    type={showPassword}
                                                    className={""}
                                                    error={loginError.password}/>
                                                <InputGroup.Text id="basic-addon2" className={"cursor-pointer"} onClick={() => setShowPassword(showPassword === "password" ? "text" : "password")}>
                                                    <svg  width="15" height="13" viewBox="0 0 15 13" fill="none">
                                                        <path d="M1.32501 12.832C1.23613 12.7387 1.18134 12.6182 1.16937 12.4899C1.15739 12.3617 1.18901 12.2331 1.25909 12.125L1.28106 12.095L12.1021 0.961976C12.1152 0.948978 12.1262 0.934212 12.1351 0.91803C12.1491 0.904517 12.1615 0.889372 12.1721 0.872986L12.86 0.166016C12.9114 0.113673 12.9728 0.0720962 13.0405 0.0437628C13.1081 0.0154294 13.1807 0.000870513 13.2541 0.000977144C13.326 0.00115351 13.3971 0.0157748 13.4632 0.0439459C13.5293 0.0721169 13.5892 0.113266 13.6391 0.164979C13.7451 0.271106 13.8046 0.414999 13.8046 0.565003C13.8046 0.715007 13.7451 0.8589 13.6391 0.965027L12.308 2.33502C13.4551 3.44901 14.3529 4.79359 14.9421 6.28003C14.9988 6.42259 14.9988 6.58144 14.9421 6.724C13.3731 10.479 10.587 12.716 7.48602 12.716H7.47808C6.04999 12.7006 4.66381 12.2313 3.52008 11.376L2.10003 12.836C2.04973 12.8881 1.98944 12.9296 1.92279 12.9579C1.85613 12.9863 1.78453 13.0009 1.71209 13.001C1.63934 13.0015 1.56721 12.9868 1.50054 12.9576C1.43387 12.9285 1.37407 12.8857 1.32501 12.832ZM5.83612 8.98499C6.15152 9.2056 6.50786 9.36086 6.88421 9.44153C7.26057 9.5222 7.64928 9.52666 8.0274 9.45471C8.40552 9.38276 8.76545 9.23584 9.08587 9.02258C9.4063 8.80932 9.68066 8.53405 9.893 8.21301C10.2327 7.70646 10.4109 7.10887 10.4041 6.49902C10.4056 5.89777 10.2318 5.30908 9.90411 4.80499L9.10406 5.62903C9.23971 5.89893 9.30989 6.19696 9.30902 6.49902C9.31597 6.98927 9.1282 7.46225 8.7868 7.81415C8.4454 8.16605 7.97833 8.36808 7.48809 8.37598C7.19202 8.3778 6.90018 8.30565 6.63909 8.16602L5.83612 8.98499ZM0.0360667 6.72302C-0.0224389 6.58115 -0.0224389 6.4219 0.0360667 6.28003C1.60207 2.53003 4.38906 0.294984 7.48406 0.294984H7.49005C8.53467 0.297596 9.56343 0.550709 10.49 1.03302L8.04803 3.54797C7.86419 3.51464 7.67785 3.49693 7.49102 3.495C6.70374 3.50658 5.95337 3.83042 5.40484 4.39526C4.85631 4.96011 4.55461 5.71974 4.5661 6.50702C4.56767 6.69875 4.58463 6.89 4.617 7.07898L1.90911 9.86499C1.12802 8.91852 0.494784 7.85919 0.0310618 6.72302H0.0360667Z" fill="#707070"/>
                                                    </svg>
                                                </InputGroup.Text>
                                            </InputGroup>

                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row row-10 mt-4">
                                    <div className="col col-6">
                                        <div className="d-flex justify-content-between">
                                            <Form.Group id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Button variant={"link"} className="link removeUnderline" onClick={() => {
                                                navigate(`${baseUrl}/forgot-password`)
                                            }}>
                                                Forgot Password
                                            </Button>
                                        </div>
                                        <div className="mt-5">
                                            <Button size="lg" onClick={handleLogin}>Sign in</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;