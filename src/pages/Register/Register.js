import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";

class Register extends Component {
    render() {
        return (
            <Container fluid>
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
                                    <Form.Text className="h2">
                                        <h2 className="pb-3">Sign up</h2>
                                        <h3 className="text-muted">Fill the below to sign up</h3>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Control size="lg" type="text" placeholder="Full Name" className="mt-4 p-4" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" className="mt-4 p-4" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control size="lg" type="password" placeholder="Password" className="mt-4 p-4" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" className="mt-4" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" size="lg" block className="mt-4 p-3">
                                        Sign Up
                                    </Button>
                                    <Form.Text className="h5 text-center mt-4">
                                        <p>Forget your Password?</p>
                                        <p>Already have an account? <a href="/Login" className="text-primary">Login</a></p>
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

export default Register;