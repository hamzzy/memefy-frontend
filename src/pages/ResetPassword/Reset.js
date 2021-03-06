import React, {Component,useState} from 'react';
import logo from '../../assets/images/logo.svg';
import {useSelector} from "react-redux";

import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";
import forget_password_email from '../../services/auth-services';
import { Redirect } from 'react-router-dom';
import Authservice from '../../services/auth-services';
import swal from 'sweetalert';

const ResetPassword=()=>{


       const [email,setEmail]=useState("");
       const { isLoggedIn } = useSelector(state => state.auth);
       const [loading, setLoading] = useState(false);

       const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

      const handleLogin = (e) => {
        e.preventDefault();
    
       Authservice.forget_password_email(email).then(
            (response) => {
                setLoading(true);

                    if (response.status==200) { 
                        swal({
                            title: "Forget password ",
                            text: "Check your email for ",
                            icon: "success",
                
                          })
                    }
                    
                },
          (error) => {
            const _content =error.response.data
            console.log(_content);
            // swal({
            //     title: "Forget password ",
            //     text: _content,
            //     icon: "error",
    
            //   })
            setLoading(false);

      
          }
        );
     
    }  
    
    
    
    if (isLoggedIn) {
        return <Redirect to="/dashboard" />;
      }
        return (
                <Container fluid className="font">
                    <Row className="d-flex">

                        <Col lg={4} md={4} className="bg min-vh-100">
                            {/* Navbar Brand Component */}
                            <Navbar.Brand href="/" className="mb-sm-4 mb-4 mt-2">
                                <img
                                    alt="Memefy Logo"
                                    src={mobileLogo}
                                    className="d-block d-sm-block d-md-none d-lg-none d-xl-none ml-4"
                                    fluid="true"
                                />{' '}
                                 <img
                                    alt="Memefy Logo"
                                    src={logo}
                                    className="d-none d-sm-none d-md-block d-lg-block d-xl-block ml-4"
                                    fluid="true"
                                />{' '}
                            </Navbar.Brand>
                            {/* Form Container */}
                            <Container fluid className="mw-100 w-100 h-50">

                                <Form className="bg-white align-middle rounded-lg mt-5 ml-2 mb-5 mb-md-5 mb-lg-5 p-4 mw-100 overlap" onSubmit={handleLogin}>
                                    <Form.Text className="head">
                                        <p className="color-1">Reset Password</p>
                                        <p className="color-2">Enter your Email to get a reset link</p>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" name='email' className="mt-4 p-4 fs-20 color-1" value={email}
                                    onChange={onChangeEmail} />
                                    </Form.Group>
                                    
                                    <Button type="submit" size="lg" block className="mt-4 p-3 fs-20 btn-bg">
                                    {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                        Send password reset link
                                    </Button>
                                    <Form.Text className="fs-20 text-center mt-4">
                                        <p className="color-3">Remember your password? <a href="/Login" className="">Login</a></p>
                                    </Form.Text>
                                </Form>
                                
                            </Container>
                        </Col>
                        {/*Display background Image at the side*/}
                        <Col lg={8} md={8} className="d-none d-sm-none d-md-block bg-img min-vh-100">
                            
                        </Col>
                    </Row>
                </Container>
        );
}

export default ResetPassword;