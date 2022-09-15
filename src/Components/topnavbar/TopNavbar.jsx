import React, { useState, useEffect } from "react";
import logo from "../../assets/logo5.png";
import "./topnavbar.css";

const TopNavbar = ({ inView }) => {
  const [isactiveNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(inView);
  }, [inView]);

  const [showNav, setShowNav] = useState(() => null);

  useEffect(() => {
    let lastScrollPosition = 0;
    setShowNav(true);
    document.addEventListener(
      "scroll",
      function (e) {
        if (window.scrollY > lastScrollPosition) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        lastScrollPosition = window.scrollY;
      },
      {
        passive: true,
      }
    );
  }, []);

  return (
    <nav
      style={{
        opacity: showNav ? 1 : 0,
        top: showNav ? 0 : "-100px",
      }}
      className="TopNavBar "
    >
      <div className="TopNavBar-text">
        <img src={logo} alt="" />
        <p>ayuresh.</p>
      </div>

      <ul className="TopNavBar-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <a
              href={"/#"}
              onClick={() => setActiveNav("#")}
              className={isactiveNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href={"#about"}
              onClick={() => setActiveNav("#about")}
              className={isactiveNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href={"#experience"}
              onClick={() => setActiveNav("#experience")}
              className={isactiveNav === "#experience" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href={"#portfolio"}
              onClick={() => setActiveNav("#portfolio")}
              className={isactiveNav === "#portfolio" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href={"#contact"}
              onClick={() => setActiveNav("#contact")}
              className={isactiveNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default TopNavbar;
