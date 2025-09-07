import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";
import { Button } from "react-bootstrap";
const NavbarComp = () => {
  const [admin, setAdmin] = useState(false);

  const handleLogin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("role");
    handleSuccess("Logout successfull");
    setAdmin(false);
  };
  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      setAdmin(true);
    }
  }, []);
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Education Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            <Nav.Link as={Link} to="/admin/requests">
              Contact Requests
            </Nav.Link>
          </Nav>
          <Nav>
            {admin && (
              <Nav.Link as={Link} to="/courses/add">
                Add Courses
              </Nav.Link>
            )}
            {admin ? (
              <Button onClick={handleLogin}>Admin Logout</Button>
            ) : (
              <Nav.Link as={Link} to="/admin">
                Admin Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer />
    </Navbar>
  );
};

export default NavbarComp;
