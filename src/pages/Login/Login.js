import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";

class Login extends Component {
    render() {
        return (
                <Container fluid className="font">
                    <Row d-flex>

                        <Col lg={4} md={4} className="bg min-vh-100">
                            {/* Navbar Brand Component */}
                            <Navbar.Brand href="/" className="mb-sm-4 mb-4 mt-2">
                                <img
                                    alt="Memefy Logo"
                                    src={mobileLogo}
                                    className="d-block d-sm-block d-md-none d-lg-none d-xl-none ml-4"
                                    fluid
                                />{' '}
                                 <img
                                    alt="Memefy Logo"
                                    src={logo}
                                    className="d-none d-sm-none d-md-block d-lg-block d-xl-block ml-4"
                                    fluid
                                />{' '}
                            </Navbar.Brand>
                            {/* Form Container */}
                            <Container fluid clasName="mw-100 w-100 h-50">

                                <Form className="bg-white align-center rounded-lg m-2 mb-5 mb-md-5 mb-lg-5 p-4 mw-100 overlap">
                                    <Form.Text className="head">
                                        <p className="color-1">Welcome!</p>
                                        <p className="color-2">Enter details to Login</p>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" className="mt-4 p-4 fs-20 color-1" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control size="lg" type="password" placeholder="Password" className="mt-4 p-4 fs-20 color-1" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" className="mt-4 fs-18 color-4" />
                                    </Form.Group>
                                    <Button type="submit" size="lg" block className="mt-4 p-3 fs-20 btn-bg">
                                        Sign In
                                    </Button>
                                    <Form.Text className="fs-20 text-center mt-4">
                                        <p><a href="/resetpassword" className="color-4">Forget your Password?</a></p>
                                        <p className="color-3">Don't have an account yet? <a href="/signup" className="">Register here</a></p>
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
}

export default Login;
