import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"

export function Header() {
  return (
    <>
    <Navbar variant="dark" bg="dark" expand="sm" >
      <Container>
        <Navbar.Brand href="#home">Home Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example"/>
        
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/buy_list">To Buy List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}