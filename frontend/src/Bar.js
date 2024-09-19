import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import t from './logoo.png'

export default function Bar({ handleClick, user })
{
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              alt=""
              src={t}
              width="100"
              height="35"
              className="d-inline-block align-top" />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="f1" href="#Men">Men</Nav.Link>
              <Nav.Link className="f1" href="#Women">Women</Nav.Link>
              <Nav.Link className="f1" href="#Kids">Kids</Nav.Link>
            </Nav>
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                    </path></g>
                    </svg><input className="input" type="search" placeholder="Search" /> 
            </div>
            <MdFavoriteBorder className="fav"/>
            <FaShoppingCart className="bag" />
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
    )
}