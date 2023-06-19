import React from "react";
import { Navbar as NavbarBootstrap, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBootstrap style={{ background: '#43a047'}}>
      <Container>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
          <Nav.Link className="text-white disabled">|</Nav.Link>
          <Nav.Link as={Link} to="/favorites" className="text-white">Favorites</Nav.Link>
        </Nav>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;