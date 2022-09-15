import React from "react";
import "./portfolio.css";
import Site1 from "../../assets/Site1.PNG";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: Site1,
      title: "SITE1",
      github: "",
      live: "",
      techStack: [
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
      ],
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      img: Site1,
      title: "SITE1",
      github: "",
      live: "",
      techStack: [
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
      ],
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      img: Site1,
      title: "SITE1",
      github: "",
      live: "",
      techStack: [
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
      ],
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      img: Site1,
      title: "SITE1",
      github: "",
      live: "",
      techStack: [
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
      ],
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      img: Site1,
      title: "SITE1",
      github: "",
      live: "",
      techStack: [
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
        {
          image: "",
          titile: "",
        },
      ],
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>PORTFOLIO</h2>

      <div className="container portfolio_container">
        {projects.map((el) => (
          <article className="portfolio_item" key={el.id}>
            <div className="portfolio_item-img">
              <img src={el.img} alt="" />
            </div>
            <h3>{el.title}</h3>
            <div className="portfolio_item-cta">
              <a href="#project" className="btn" target="_blank">
                GitHub
              </a>
              <a href="#project" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
