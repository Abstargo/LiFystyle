import React from "react";
/**import NavDropdown from "react-bootstrap/NavDropdown";*/
import { useNavigate } from "react-router-dom";
/**import { RxAvatar } from "react-icons/rx";*/
import Bar from './Bar';
import Content from "./Content";
import Cards from "./Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function Home({ user }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <Bar user={user} handleClick={handleClick} />
      <Content />
      <Cards />
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
