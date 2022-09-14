import React from "react";
import "./navbar.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {FaNetworkWired} from "react-icons/fa"
import {BiMessageRoundedDetail} from "react-icons/bi"




const Navbar = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><FaNetworkWired/></a>
      <a href="#contact"><BiMessageRoundedDetail/></a>
    </nav>
  );
};

export default Navbar;
