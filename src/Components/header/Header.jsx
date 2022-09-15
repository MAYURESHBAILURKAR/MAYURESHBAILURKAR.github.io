import React from "react";
import CTA from "./CTA";
import "./header.css";
import { HeaderSocials } from "./HeaderSocials";
import TypingEffect from "./TypingEffect";
const Header = () => {
  return (
    <header>
       
      <div className="container header_container">
        <div className="header_text">
          <h3>Hello I'm</h3>
          <TypingEffect />
          <span>
            <h3>I build things that lives on Internet.</h3>
          </span>
          {/* <h1>Mayuresh Bailurkar</h1> */}
          <h3 className="text-light">Fullstack Web Developer</h3>
          <CTA />
        </div>

        <HeaderSocials />
        {/* <div className="me">
          <img src="https://loremflickr.com/640/360" alt="me" />
        </div> */}
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
