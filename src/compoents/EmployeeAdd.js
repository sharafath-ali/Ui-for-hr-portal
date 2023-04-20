import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./EmployeeAdd.css";
import img from "../assets/hr-connect-logo.png";
import img1 from "../assets/hr-employee-img (1).png";
import { useNavigate } from "react-router-dom";

function EmployeeAdd() {
  const navigate=useNavigate()
  return (
    <div className="parent-container">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="content-container-fluid h-100 container">
        <div class="row h-100">
          <div class="col-md-6 left-half">
            <img src={img1} alt="Image" class="img-fluid left-image" />
          </div>
          <div class="col-md-6 right-half ">
            <h1 className="form-head-text">New Employee</h1>
            <form>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control my-4"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

            

              <div class="form-group">
                <input
                  type="email"
                  class="form-control my-4"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div class="form-group">
                <input
                  type="email"
                  class="form-control my-4"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              
              <div class="form-group">
                <input
                  type="email"
                  class="form-control my-4"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              
              <div class="form-group">
                <input
                  type="email"
                  class="form-control my-4"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <button type="submit" class="btn btn-primary  my-4 aligh-right" onClick={()=>navigate('/Upload')}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeAdd;
