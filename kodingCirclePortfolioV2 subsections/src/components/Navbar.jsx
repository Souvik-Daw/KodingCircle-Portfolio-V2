import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarSection = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="https://www.kodingcircle.in/home">KodingCIRCLE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/Review">Review</Nav.Link>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://kodingcircle.in/restaurant/index.html">Restaurant QR</NavDropdown.Item>
                <NavDropdown.Item href="https://kodingcircle.in/gym/index.html">Gym QR</NavDropdown.Item>
                <NavDropdown.Item href="https://kodingcircle.in/inventory/index.html">Inventory QR</NavDropdown.Item>
                <NavDropdown.Item href="https://kodingcircle.in/architecture/index.html">Architecture QR</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

};

export default NavbarSection;
