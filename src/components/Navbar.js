import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Brand-Logo</h1>
      <ul>
        <Link to="/">
          <li className="active nav-link">Home</li>
        </Link>
        <Link to="/student">
          <li className="nav-link">Students</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
