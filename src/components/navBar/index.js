import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="header"
      id="header"
      sticky="top"
      style={{ height: "8vh" }}
    >
      <Container>
        <Navbar.Brand data-aos="zoom-in-left" data-aos-delay="150" href="#home">
          Baha' Abu-Elwan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home" data-aos="zoom-in-left" data-aos-delay="300">
              Home
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#about"
              data-aos="zoom-in-left"
              data-aos-delay="450"
            >
              About
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#skills"
              data-aos="zoom-in-left"
              data-aos-delay="600"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#projects"
              data-aos="zoom-in-left"
              data-aos-delay="750"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#Footer"
              data-aos="zoom-in-left"
              data-aos-delay="900"
            >
              Contact
            </Nav.Link>
            <Button
              className="Resume"
              variant="outline-primary"
              href="https://onedrive.live.com/?cid=512061AFF0E92985&id=512061AFF0E92985%21123&parId=root&o=OneUp"
              target="_blank"
              data-aos="zoom-in-left"
              data-aos-delay="1000"
            >
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
