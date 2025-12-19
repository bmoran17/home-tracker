import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
    {/* <Navbar variant="dark" bg="dark" expand="sm" >
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
    </Navbar> */}


<nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
    )
}