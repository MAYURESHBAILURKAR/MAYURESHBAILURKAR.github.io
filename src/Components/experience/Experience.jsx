import React from "react";
import "./experience.css";
import { HiCheckCircle } from "react-icons/hi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiChakraui, SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";

const Experience = () => {
  const skillsFront = [
    {
      image: <ImHtmlFive />,
      titile: "HTML",
      status: "Experienced",
    },
    {
      image: <DiCss3 />,
      titile: "CSS",
      status: "Experienced",
    },
    {
      image: <FaReact />,
      titile: "REACT",
      status: "Experienced",
    },
    {
      image: <DiJavascript1 />,
      titile: "JAVASCRIPT",
      status: "Experienced",
    },
    {
      image: <SiChakraui />,
      titile: "CHAKRA UI",
      status: "Intermediate",
    },
    {
      image: <SiRedux />,
      titile: "Redux",
      status: "Intermediate",
    },
  ];
  // =================================BackEnd
  const skillsBack = [
    {
      image: <FaNodeJs />,
      titile: "NodeJS",
      status: "Intermediate",
    },
    {
      image: <SiExpress />,
      titile: "ExpressJS",
      status: "Intermediate",
    },
    {
      image: <SiMongodb />,
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
                <div>
                  <div className="experience_details_skill_icon">
                    {el.image}
                  </div>
                  <HiCheckCircle className="experience_details_icon" />
                </div>
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
                <div>
                  <div className="experience_details_skill_icon">
                    {el.image}
                  </div>
                  <HiCheckCircle className="experience_details_icon" />
                </div>
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
