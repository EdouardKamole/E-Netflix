import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); // Use navigate instead of history

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="e-netstream.png"
          alt="E-netstream Logo"
        />
        <img
          onClick={() => navigate("/profile")} // Use navigate for routing
          className="nav_avatar"
          src="https://i.pinimg.com/564x/32/3e/cc/323ecca68b7105d23184e783b86b0c5a.jpg"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
