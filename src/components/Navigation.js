import React from "react";
import axios from "axios";
import API from "../Api";
import { Navbar, Nav, Container, NavbarBrand, Form } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Store App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Catalog</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
            <Form inline>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
