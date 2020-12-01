import React, {Component,useState} from 'react';
import logo from '../../assets/images/logo.svg';
import {useSelector,useDispatch} from "react-redux";

import mobileLogo from '../../assets/images/mobile_Logo.svg';
import {Container, Form, Navbar, Button, Row, Col} from "react-bootstrap";
import forget_password_email from '../../services/auth-services';
import { Redirect } from 'react-router-dom';
import Authservice from '../../services/auth-services';
import swal from 'sweetalert';
import { SET_MESSAGE,} from "../../actions/types";
const ResetPasswordConfirm=(props)=>{


       const [password,setPassword]=useState("");
       const { isLoggedIn } = useSelector(state => state.auth);
       const [loading, setLoading] = useState(false);
       const { message } = useSelector(state => state.message);

       const dispatch = useDispatch();

       const onChangePassword = (e) => {
        const pass = e.target.value;
        setPassword(pass);
      };
    
     

      const handleLogin = (e) => {
        e.preventDefault();
        const uidb64 = props.match.params.uid;
        const token = props.match.params.token;
        Authservice.reset_password_confirm(uidb64,token,password).then(
            (response) => {

                    if (response.status === 200) { 
                        swal({
                            title: "Reset Password",
                            text: "Password Change sucessfully ",
                            icon: "success",
                          })
                    }
                    
                },
          (error) => {
            const message =(Object.entries(error.response.data).map(([key, value]) => value));
  
  
            dispatch({
            type: SET_MESSAGE,
            payload: message,
            });
           
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
                            {message && (
                                <div className="form-group">
                                            
                                <div className="alert alert-danger" role="alert">
                                    {message.map(function(name, index){
                            return <li key={ index }>{name}</li>;
                        })}
                                </div>
                                </div>
                            )}
                                <Form className="bg-white align-middle rounded-lg mt-5 ml-2 mb-5 mb-md-5 mb-lg-5 p-4 mw-100 overlap" onSubmit={handleLogin}>
                                    <Form.Text className="head">
                                        <p className="color-2">Enter new passowrd</p>
                                    </Form.Text>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control size="lg" type="password" placeholder="Enterpassword" name='password' className="mt-4 p-4 fs-20 color-1" value={password}
                                    onChange={onChangePassword} />
                                    </Form.Group>

                                    
                                    
                                    <Button type="submit" size="lg" block className="mt-4 p-3 fs-20 btn-bg">
                                    {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                        Change password
                                    </Button>
                                    
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

export default ResetPasswordConfirm;