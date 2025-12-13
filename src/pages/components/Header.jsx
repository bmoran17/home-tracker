import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
    <Navbar variant="dark" bg="dark" expand="sm" >
      <Container>
        <Navbar.Brand as={Link} to="/">Home Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example"/>
        
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/notes">To Buy List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}