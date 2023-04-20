import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Profile.css";
import img from "../assets/hr-connect-logo.png";
import { useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.jpg";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import { IconButton } from '@mui/material';
function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="MainNavbar" expand="lg">
        <Container className="NavContainer" fluid>
          <img className="NavLogo" src={img} onClick={() => navigate("/")} />
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
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-sm-12 col-lg-6 ">
                {/* Profile detail */}
              <div className="profile-detail pt-4 mb-5 ">
                {/* profile pic */}
                <div className="d-flex justify-content-center pt-5">
                  <div className="profile-pic  bg-success">
                    <img className="" src={profile1}></img>
                  </div> 
                </div>
                {/* end profile pic */}
                <h3 className="mt-4">Sharafath Ali</h3>
                <h6>(React Trainee)</h6>
                <h6>sharafath@gmail.com</h6>
                <div className="content ">
                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="d-flex justify-content-around mt-5">
                <button className="button-icons color-pink"> <DeleteRoundedIcon className="icon"/> </button>
                <button className="button-icons color-green"> <EditRoundedIcon className="icon"/> </button>
                <button className="button-icons color-blue"> <FolderSharedRoundedIcon className="icon"/> </button>
                </div>
                </div>
              </div>
              {/* end profile details */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
