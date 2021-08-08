import React from 'react'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';

function NavbarHome() {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  {/* <Container> */}
  <Navbar.Brand href="#home">VEBBOX</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <NavDropdown title="Others" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Institution</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Logistics</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
  
        </div>
    )
}

export default NavbarHome
