import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/mayuresh-bailurkar-549555bb/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/MAYURESHBAILURKAR" target="_blank">
        <FaGithub />
      </a>
      {/* <a href="https://www.linkedin.com/in/mayuresh-bailurkar-549555bb/" target="_blank"></a> */}
    </div>
  );
};
