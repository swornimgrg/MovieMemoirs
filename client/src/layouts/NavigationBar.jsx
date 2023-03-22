import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar bsPrefix="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand bsPrefix="navbar" href="#">
          MovieMemoirs
        </Navbar.Brand>
        <Navbar.Toggle bsPrefix="navbar-toggler" />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "120px" }}>
            <Nav.Link bsPrefix="nav-link" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link bsPrefix="nav-link" href="#action2">
              Trending
            </Nav.Link>

            <Nav.Link bsPrefix="nav-link" href="#">
              Browse Movies
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
