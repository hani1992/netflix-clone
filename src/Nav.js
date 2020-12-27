import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to='/'><img
        className="nav__logo"
        src="https://about.netflix.com/images/logo.png"
        alt="Netflix Logo"
      />
      </Link>
    </div>
  );
}

export default Nav;
