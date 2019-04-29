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
  const links = ['about', 'contact', 'faq', 'how_its_made', 'item_detail', 'item_list', 'locations', 'shopping_cart'];
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand><img src={process.env.PUBLIC_URL + '/images/skinny.png'} style={{width: '100px'}} alt=""/></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {links.map((l, i) => {
            return (
              <LinkContainer to={l} key={i}>
                <Nav.Link>{l.replace(/_/g, ' ').toProperCase()}</Nav.Link>
              </LinkContainer>
            )
          })}
          {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
          {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
          {/*  <NavDropdown.Divider />*/}
          {/*  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
          {/*</NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

