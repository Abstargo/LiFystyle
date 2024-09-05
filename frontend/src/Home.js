import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/**import NavDropdown from "react-bootstrap/NavDropdown";*/
import { useNavigate } from "react-router-dom";
/**import { RxAvatar } from "react-icons/rx";*/
import { FaUserCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import './App.css';

export default function Home({ user }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">LiFyStyle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Men">Men</Nav.Link>
              <Nav.Link href="#Women">Women</Nav.Link>
              <Nav.Link href="#Kids">Kids</Nav.Link>
              <Nav.Link href="#Boys">Boys</Nav.Link>
              <Nav.Link href="#Girls">Girls</Nav.Link>
            </Nav>
            <div className="group"><svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg><input className="input" type="search" placeholder="Search" /> </div>
            <MdFavoriteBorder className="fav"/>
            <RiShoppingBag4Fill className="bag"/>
            {user ? (
              <div className="d-flex align-items-center">
                <FaUserCircle className="us" />
                <p className="mb-0 ms-2">{`Hello Again`}</p>
              </div>
            ) : (
              <div className="si"><button className="btn" onClick={handleClick}>Sign-In</button></div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

              /*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>*/
