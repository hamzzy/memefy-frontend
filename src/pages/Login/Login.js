import React, {Component} from 'react';
import {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import Error from '../../services/error';
import { login } from "../../actions/auth";
const Login=(props) =>{


   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [loading, setLoading] = useState(false);
   const [error,setError] = useState(Error);
   const [err, setErr]= useState(false);
   const dispatch = useDispatch();
   const { message } = useSelector(state => state.message);
   const { isLoggedIn } = useSelector(state => state.auth);

   const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(message);

    setLoading(true);
    dispatch(login(email, password)).then(() => {
        setLoading(true);

    //   props.history.push("/profile");
    //   window.location.reload();

    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setErr(true);
      setError(err);
    });
 
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
                            <Container fluid="true" className="mw-100 w-100 h-50">

                                {/*  error message display     */}
                                    {message && (
                                <div className="form-group">
                                            
                                <div className="alert alert-danger" role="alert">
                                    {message.map(function(name, index){
                            return <li key={ index }>{name}</li>;
                        })}
                                </div>
                                </div>
                            )}
                                <Form className="bg-white align-center rounded-lg m-2 mb-5 mb-md-5 mb-lg-5 p-4 mw-100 overlap" onSubmit={handleLogin}>
                                    <Form.Text className="head">
                                        <p className="color-1">Welcome!</p>

                                        <p className="color-2">Enter details to Login</p>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" name="email" 
                                        value={email}
                                    onChange={onChangeEmail}
                                    className="mt-4 p-4 fs-20 color-1" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control size="lg" type="password" placeholder="Password"   name="password" 
                                        value={password}
                                    onChange={onChangePassword} className="mt-4 p-4 fs-20 color-1" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" className="mt-4 fs-18 color-4" />
                                    </Form.Group>
                                    <Button type="submit" size="lg" block className="mt-4 p-3 fs-20 btn-bg">
                                                                    {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
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

export default Login;
