import React from "react";
import "./about.css";
import { BiCode } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiCode className="about_icon" />
              <h5>1000+ hrs</h5>
              <small>Extensive coding</small>
            </article>
            <article className="about_card">
              <AiOutlineProject className="about_icon" />
              <h5>5+ Projects</h5>
              <small>End to End websites</small>
            </article>
          </div>
          <p>
            I am a Full-stack developer with a deep knowledge of JavaScript,
            HTML, CSS, and React and a 1000+ hours of coding practice. Looking
            forward to joining a progressive and challenging work environment.
            where I can develop a deeper understanding of web development.Gone
            through 25 weeks of coding Bootcamp at Masai School.Also, worked on
            NodeJs, Express, MongoDB DataBase.Always eager to learn new
            technologies to enhance my skills and bring value to the
            organization.
          </p>
          <a href="#contact" className="btn btn-primary about_btn">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
