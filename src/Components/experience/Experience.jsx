import React from "react";
import "./experience.css";
import { HiCheckCircle } from "react-icons/hi";
const Experience = () => {
  const skillsFront = [
    {
      titile: "HTML",
      status: "Experienced",
    },
    {
      titile: "CSS",
      status: "Experienced",
    },
    {
      titile: "REACT",
      status: "Experienced",
    },
    {
      titile: "JAVASCRIPT",
      status: "Experienced",
    },
    {
      titile: "CHAKRA UI",
      status: "Intermediate",
    },
    {
      titile: "Redux",
      status: "Experienced",
    },
  ];
  // =================================BackEnd
  const skillsBack = [
    {
      titile: "NodeJS",
      status: "Intermediate",
    },
    {
      titile: "ExpressJS",
      status: "Intermediate",
    },
    {
      titile: "MongoDb",
      status: "Intermediate",
    },
  ];
  return (
    <section id="experience">
      <h5>Tech Stack</h5>
      <h2>Skills I Have</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {skillsFront.map((el) => (
              <article className="experience_details">
                <HiCheckCircle className="experience_details_icon" />
                <div>
                  <h4>{el.titile}</h4>
                  <small className="text-light">{el.status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {skillsBack.map((el) => (
              <article className="experience_details">
                <HiCheckCircle className="experience_details_icon" />
                <div>
                  <h4>{el.titile}</h4>
                  <small className="text-light">{el.status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
