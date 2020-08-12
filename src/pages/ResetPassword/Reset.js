import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";

class ResetPassword extends Component {
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

                                <Form className="bg-white align-middle rounded-lg mt-5 ml-2 mb-5 mb-md-5 mb-lg-5 p-4 mw-100 overlap">
                                    <Form.Text className="head">
                                        <p className="color-1">Reset Password</p>
                                        <p className="color-2">Enter your Email to get a reset link</p>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" className="mt-4 p-4 fs-20 color-1" />
                                    </Form.Group>
                                    <Button type="submit" size="lg" block className="mt-4 p-3 fs-20 btn-bg">
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
}

export default ResetPassword;