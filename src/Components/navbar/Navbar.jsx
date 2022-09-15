import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [acitveNav, setActiveNav] = useState("#");

  return (
    <nav className="Bottom_nav">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={acitveNav == "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={acitveNav == "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={acitveNav == "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={acitveNav == "#portfolio" ? "active" : ""}
      >
        <FaNetworkWired />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={acitveNav == "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Navbar;
