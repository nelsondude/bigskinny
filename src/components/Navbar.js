import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

export default () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand><img src={process.env.PUBLIC_URL + '/images/skinny.png'} style={{width: '100px'}} alt=""/></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to={'about'}>
            <Nav.Link>
              About
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={'how_its_made'}>
            <Nav.Link>
              How It's Made
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={'wallets'}>
            <Nav.Link>
              Wallets
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to={'contact'}>
            <Nav.Link>
              Contact
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={'faq'}>
            <Nav.Link>
              FAQ
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={'locations'}>
            <Nav.Link>
              Locations
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={'shopping_cart'}>
            <Nav.Link>
              <i className="fas fa-shopping-cart"></i>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

