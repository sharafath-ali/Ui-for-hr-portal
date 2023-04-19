import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../assets/hr-connect-logo.png";
import "./MainNavbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom';
function MainNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar className="MainNavbar" expand="lg">
      <Container className="NavContainer" fluid>
        <img className="NavLogo" src={img} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Button
            className="AddButton round-corner"
            variant="outline-secondary"
            onClick={() => navigate('add')}
            
          >
            <AddIcon /> Add
          </Button>
          <Form className="d-flex">
            <div className="round-corner search-container">
              <SearchIcon className="search-icon" />
              <input
                type="search"
                placeholder="Search"
                className="me-2 seach-bar"
                aria-label="Search"
              />
            </div>
            {/* <Button variant="outline-success"></Button>*/}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
