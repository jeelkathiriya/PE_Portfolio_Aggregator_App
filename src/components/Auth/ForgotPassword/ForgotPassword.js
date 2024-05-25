import React from 'react';
import loginSide from "../../../img/loginSide.png";
import {Button, Form, InputGroup} from "react-bootstrap";
import {baseUrl} from "../../../Utils/Constant";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

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
                            <div className="row row-10">
                                <div className="col col-8">
                            <h1>Forgot password?</h1>
                           <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                                </div>
                            </div>
                            <div className="auth-form">
                                <div className="row row-10">
                                    <div className="col col-7">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Your email</Form.Label>
                                            <Form.Control
                                                name={"email"}
                                                placeholder={"Email"}

                                                type={"text"}
                                                className={""}

                                            />
                                        </Form.Group>

                                    </div>

                                </div>
                                <div className="row row-10 mt-4">
                                    <div className="col col-7">


                                            <Button size="lg" >Submit</Button>

                                    <div className="mt-5">
                                        <Button variant={"link"} className="link removeUnderline" onClick={() => {
                                            navigate(`${baseUrl}/login`)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                                                <path d="M5.72703 1.22601C5.86923 1.36538 5.95578 1.5517 5.97069 1.75024C5.98559 1.94879 5.92776 2.14596 5.80797 2.30499L5.72703 2.39697L2.04198 5.98999L5.72703 9.58301C5.86923 9.72237 5.95578 9.9087 5.97069 10.1072C5.98559 10.3058 5.92776 10.503 5.80797 10.662L5.72703 10.755C5.58373 10.8957 5.39511 10.9811 5.19481 10.9959C4.99451 11.0107 4.79551 10.9541 4.63304 10.836L4.53892 10.755L0.259016 6.57599C0.116822 6.43663 0.0301463 6.2503 0.0152418 6.05176C0.000337303 5.85322 0.0581677 5.65604 0.177962 5.49701L0.259016 5.40399L4.53892 1.22601C4.6976 1.07063 4.91096 0.983582 5.13304 0.983582C5.35512 0.983582 5.56836 1.07063 5.72703 1.22601Z" fill="#60269E"/>
                                            </svg>&nbsp;&nbsp;&nbsp;
                                            Back to sign in
                                        </Button>
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

export default ForgotPassword;