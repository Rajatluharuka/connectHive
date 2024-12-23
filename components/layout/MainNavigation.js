import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useTheme } from "../../context/ThemeContext";

function MainNavigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar
      bg={theme}
      variant={theme === "dark" ? "dark" : "light"}
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          ConnectHive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/" className="me-3">
              All Meetups
            </Nav.Link>
            <Nav.Link as={Link} href="/new-meetup" className="me-3">
              Add New Meetup
            </Nav.Link>
            <Button
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
