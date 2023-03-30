import "./nav.css";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Offcanvas,
  Nav,
  Form,
  Container,
  Button,
} from "react-bootstrap";

const func = new Set();

const Navigation = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const tick = setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000)

    return () => clearInterval(tick);//returned callback will be executed at component will unmount
  }, [])

  const handleSearch = useCallback(() => {
    console.log("handle-search-nav")
  }, [])

  func.add(handleSearch);

  console.log(func)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Dummy shop<span className="ms-3">{clock}</span></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Dummy shop
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/form" className="nav-link">Form</Link>
              <Link to="/about" className="nav-link">About</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Navigation;