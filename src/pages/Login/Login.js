import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg'
import {Container, Form, Navbar, Button} from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <div className="bg vh-100">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Memefy Logo"
                            src={logo}
                        
                            className="d-inline-block p-2" fluid
                        />{' '}
                    </Navbar.Brand>
                    <Form className="bg-white align-top rounded-lg m-2 p-4 w-50">
                        <Form.Text className="h2">
                            <h2 className="pb-3">Welcome!</h2>
                            <h3 className="text-muted">Enter details to Login</h3>
                        </Form.Text>
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
                            Sign In
                        </Button>
                        <Form.Text className="h5 text-center mt-4">
                            <p>Forget your Password?</p>
                            <p>Don't have an account yet? <a href="#" className="text-primary">Register here</a></p>
                        </Form.Text>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Login;