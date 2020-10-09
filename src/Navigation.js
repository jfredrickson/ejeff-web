import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          Jeff Fredrickson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"/>
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="projects">
              Projects
            </Nav.Link>
            <Nav.Link href="contact">
              Contact
            </Nav.Link>
            <NavDropdown title="Admin" alignRight>
              <NavDropdown.Item href="profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="photos">
                Photos
              </NavDropdown.Item>
              <NavDropdown.Item href="logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
