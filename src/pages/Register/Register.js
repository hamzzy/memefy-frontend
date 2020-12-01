import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";
import {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { register } from "../../actions/auth";
import swal from 'sweetalert';
const Register =(props)=> {
   
    const [name,setName]=useState("");
 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(Error);
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);
    const { isLoggedIn } = useSelector(state => state.auth);
    const [successful, setSuccessful] = useState(false);

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
      };


    const onChangeEmail = (e) => {
     const email = e.target.value;
     setEmail(email);
   };
 
   const onChangePassword = (e) => {
     const password = e.target.value;
     setPassword(password);
   };
   const handleRegister = (e) => {    
       e.preventDefault();
    setLoading(true);
    setSuccessful(false);
    dispatch(register(name, email, password))

        .then(() => {
            
            swal({
            title: "Register successfully ",
            text: "Check your email to verify your account",
            icon: "success",

          })
        
        }).catch((err) => {
            setLoading(false);

        });
 
}  

        return (
            <Container fluid className="font">
                    <Row className="d-flex">

                        <Col lg={4} md={4} className="bg min-vh-100">
                            {/* Navbar Brand Component */}
                            <Navbar.Brand href="/" className="">
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
                            <Container fluid className="mw-100 w-100">



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
                                <Form className="bg-white align-center rounded-lg m-2 mb-5 mb-md-5 mb-lg-5 p-4 mw-100 overlap" onSubmit={handleRegister} >
                                    <Form.Text className="head">
                                        <p className="color-1">Sign up</p>
                                        <p className="color-2">Fill the below to sign up</p>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Control size="lg" type="text" placeholder="Full Name"  className="mt-4 p-4 fs-20 color-1" name="name" 
                                        value={name}
                                        onChange={onChangeName}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" className="mt-4 p-4 fs-20 color-1"  name="email" 
                                        value={email}
                                        onChange={onChangeEmail}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control size="lg" type="password" placeholder="Password" className="mt-4 p-4 fs-20 color-1"  name="password"     
                                        
                                        value={password}
                                    onChange={onChangePassword}
                                        />
                                    </Form.Group>
                                    
                                    <Button type="submit" size="lg" block className="mt-4 p-3 fs-20 btn-bg">
                                    {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                        Sign Up
                                    </Button>
                                    <Form.Text className="fs-20 text-center mt-4">
                                        <p className="color-3">Already have an account? <a href="/Login" className="">Login</a></p>
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


export default Register;