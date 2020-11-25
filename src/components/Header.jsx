import React, { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import mobileLogo from '../assets/images/mobile_Logo.svg';
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {useState,useEffect} from 'react';
import { clearMessage } from "../../src/actions/messages";
import { history } from "../helpers/history";
import { logout } from "../actions/auth";





export const Header =(props)=> {  
  const { user: currentUser } = useSelector((state) => state.auth);



  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
        return (
            <div className="font">
                <Navbar expand="lg ml-lg-4">
                  <Navbar.Brand href="#home">
                    <img
                        alt="Memefy Logo"
                        src={mobileLogo}
                        className="d-inline-block d-sm-inline-block d-md-none d-lg-none d-xl-none align-top"
                        fluid = "true"
                    />{' '}
                    <img
                      alt="Memefy Logo"
                      src={logo}
                    
                      className="d-none d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block align-top"
                    />{' '}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className='navb justify-content-between fs-24 px-lg-5'>
                      <Nav.Link href="#home" className="mx-3 navb">Explore</Nav.Link>
                      <Nav.Link  href="#link" className="mx-3 navb">API</Nav.Link>
                      {currentUser ? (
                                            <Nav className='navb justify-content-between fs-24 px-lg-2'>

                                <Nav.Link to="/dashboard"className="mx-3 navb">{currentUser.name}</Nav.Link>
                                <Nav.Link to="/login" className="mx-3 navb" onClick={logOut}>LogOut</Nav.Link>
                                </Nav>
                            ) : (
                              <Nav className='navb justify-content-between fs-24 px-lg-2'>

                                <Nav.Link href="/login" className="mx-3 navb">Login</Nav.Link>
                                <Link to='/signup' className="mt-1 ml-3"><Button type="submit" className="fs-20 btn-bg px-4 rounded-lg" size="lg">Sign Up</Button></Link>
                                </Nav>
                            )}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    
}

export default Header
