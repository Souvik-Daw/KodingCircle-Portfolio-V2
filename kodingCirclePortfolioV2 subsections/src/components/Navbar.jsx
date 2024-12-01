import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarSection = () => {
  return (
    // <header className='header p-10'>
      
        
     
    //   <nav className='flex text-lg gap-7 font-medium'>
    //     <NavLink to='https://www.kodingcircle.in/home' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
    //       Home 
    //     </NavLink>
    //     <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
    //       About 
    //     </NavLink>
    //     <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
    //       Contact
    //     </NavLink>
    //     <NavLink to='/Portfolio' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
    //       Portfolio
    //     </NavLink>
    //     <NavLink to='/Review' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
    //       Review
    //     </NavLink>
    //   </nav>
    // </header>

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );

};

export default NavbarSection;
