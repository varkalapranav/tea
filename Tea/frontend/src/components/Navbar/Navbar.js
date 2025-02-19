import React from "react";
import "./Navbar.css";
import Gallery from "../Gallery/Gallery";

const Navbar = () => {
  return (
    <div className="main_Section">
      <div className="list_Section">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li onClick={Gallery}>Gallery</li>
          <li>About_Us</li>
          <li>Contact_Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
