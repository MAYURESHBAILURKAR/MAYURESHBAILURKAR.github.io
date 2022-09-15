import React from "react";
import "./footer.css";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../assets/logo5.png"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
      <img src={logo} alt="" className="footer_logo-img" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/mayureshbailurkar" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com/mayureshbb" target="_blank">
          <RiTwitterLine />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Mayuresh Bailurkar. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
