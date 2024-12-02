import React from "react";
import "./navbar.css";
import logo from "../../assets/k-logo.png";
import contactMe from "../../assets/contactMe-icon.png"
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo"/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactMe} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
