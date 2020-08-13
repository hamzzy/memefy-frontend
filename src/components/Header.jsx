import React, { Component } from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap';
import logo from '../assets/images/logo.svg'
import {Link} from "react-router-dom";
export class Header extends Component {
    render() {
        return (
            <div className="font">
                <Navbar expand="lg ml-4">
                  <Navbar.Brand href="#home">
                    <img
                      alt="Memefy Logo"
                      src={logo}
                    
                      className="d-inline-block align-top"
                    />{' '}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className='navb justify-content-between fs-24 px-lg-5'>
                      <Nav.Link href="#home" className="mx-3 navb">Explore</Nav.Link>
                      <Nav.Link  href="#link" className="mx-3 navb">API</Nav.Link>
                      <Nav.Link href="/login" className="mx-3 navb">Login</Nav.Link>
                      <Link to='/signup' className="mt-1 ml-3"><Button type="submit" className="fs-20 btn-bg px-4 py-2 text-center">Sign Up</Button></Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header
