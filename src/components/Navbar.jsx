import React  from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarBlog = () => {


  return (
    <div>
        <Navbar bg="info" expand="md">
          <Container className="d-flex justify-content-center">
            <LinkContainer to="/">
              <Navbar.Brand>
                  <img src="https://www.freeiconspng.com/uploads/blogger-logo-icon-png-1.png" height={40} alt="Blog" />
              </Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        <Navbar bg="secondary" expand="md">
          <Container className="d-flex justify-content-center">
            <LinkContainer to="/create" style={{color: 'black'}} ><Nav.Link>Create</Nav.Link></LinkContainer>
            <LinkContainer to="/login" style={{color: 'black'}}><Nav.Link>Login</Nav.Link></LinkContainer>
            <LinkContainer to="/" style={{color: 'black'}}><Nav.Link>Home</Nav.Link></LinkContainer>
          </Container>

        </Navbar>
    </div>
  );
};

export default NavbarBlog;
