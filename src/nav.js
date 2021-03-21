import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Nav, Navbar} from 'react-bootstrap';
// import './nav.css';


class NavB extends Component{
    render(){
        return(
            <Navbar variant="light" className="shadow p-3 mb-3 bg-white rounded" expand="lg" activeKey="/">
                {/* <Navbar.Brand href="#home" className="text-success">LOGO</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav>
                <Nav.Link >
              <Link to="/">
                  Home
                  </Link>
                  </Nav.Link>
                <Nav.Link eventKey="link-1">
                    <Link to="/about">
                        About
                    </Link>
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                  <Link to="/shop">
                    Shop
                </Link>
                  </Nav.Link>
              <Nav.Link eventKey="disabled">
                  <Link to="/contact">
                      Contact
                  </Link>
              </Nav.Link>
                </Nav>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavB;