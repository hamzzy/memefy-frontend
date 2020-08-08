import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import logo from '../assets/images/logo.svg'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
       
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className='navb'>
      <Nav.Link href="#home">Explore</Nav.Link>
      <Nav.Link href="#link">API</Nav.Link>
      <Nav.Link href="#link">Login</Nav.Link>
      <Button type="submit">SignUp</Button>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


            </div>
        )
    }
}

export default Header
