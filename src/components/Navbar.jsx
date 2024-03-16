import React from "react";
import { Link } from "react-router-dom";
import { Navbar as customNavbar} from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="container-navbar">
      <ul>
        <li>
          <Link className="home" to="/">🏡Home</Link>
          <Link to="/Contacto">📗Contacto</Link>   
          <customNavbar.Brand className="title">Happy Cake🍰</customNavbar.Brand>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


