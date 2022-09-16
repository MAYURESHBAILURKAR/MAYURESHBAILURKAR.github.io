import React from "react";
import "./portfolio.css";
import Skinstore from "../../assets/Site1.PNG";
import hiver from "../../assets/site2.PNG";
import shop from "../../assets/site3.PNG";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiChakraui } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";

import Content_port from "./Content_port";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: Skinstore,
      title: "SkinStore.com (Clone)",
      github: "https://github.com/MAYURESHBAILURKAR/supreme-honey-5251",
      live: "https://skinstore-sigma.vercel.app/",
      techStack: [
        {
          image: <FaReact />,
          title: "React",
        },
        {
          image: <DiJavascript1 />,
          title: "JS-ES6",
        },
        {
          image: <SiChakraui />,
          title: "Chakra Ui",
        },
        {
          image: <ImHtmlFive />,
          title: "HTML",
        },
        {
          image: <VscJson />,
          title: "Mock Server",
        },
      ],
      des: `Hey 👋 , this is the clone of one of the best E-commerce website named “SkinStore.com”. This project was assigned to me in construct week .SkinStore.com is a E-commerce website where they sell cosmetics skin products as well as provide hair and skincare treatment.`,
      features: [
        "End-to-End product purchasing flow from the website.",
        "Login check with (reqres.in), Sorting, and Filtering features for products ",
        "Individual Project completed in 1 week.",
        "Displaying products added to the cart with details like price, size,quantity, etc.",
        "The functionality provided to increase the quantity of a product,and changes in price to be displayed under each product and subtotal.Executed the Project with pixel-perfect accuracy and provided important functionalities.",
      ],
    },
    {
      id: 2,
      img: hiver,
      title: "Hiver.com (Clone)",
      github: "https://github.com/MAYURESHBAILURKAR/puffy-rain-1236",
      live: "https://rainbow-churros-cbb8c1.netlify.app",
      techStack: [
        {
          image: <ImHtmlFive />,
          title: "HTML",
        },
        {
          image: <DiCss3 />,
          title: "CSS",
        },
        {
          image: <DiJavascript1 />,
          title: "JavaScript",
        },
      ],
      des: "Hey 👋 , this is the clone of one of the an amazing website named “ Hiver.com ”.Hiver provides simplified email collaboration for teams we have to use thier extention which keep tracks of all the important emails and keep a sorted track of all the emails.",
      features: [
        "Used Advance CSS and Login check are provided.",
        "Completed Project in 1 week with a team of 5.",
        "Created 3 service pages using HTML, CSS, and Javascript.",
        "Executed the pages with pixel-perfect accuracy and functionality.",
      ],
    },
    {
      id: 3,
      img: shop,
      title: "Shop.com (Clone)",
      github: "https://github.com/Kunalyerunkar/Shope-Clone",
      live: "https://astonishing-sfogliatella-dbd70d.netlify.app",
      techStack: [
        {
          image: <ImHtmlFive />,
          title: "HTML",
        },
        {
          image: <DiCss3 />,
          title: "CSS",
        },
        {
          image: <DiJavascript1 />,
          title: "JavaScript",
        },
      ],
      des: `Hey 👋 , this is the clone of one of the best E-commerce website named “ Shop.com ”. This project was assigned to me in construct week. Shop.com a E-commerce website where they sell cosmetics,clothing and many more products`,
      features: [
        "End-to-End product purchasing flow from the website.",
        "Login check, Sorting, and Filtering features for products",
        "Was responsible for creating a cart and payment page using HTML, CSS, and Javascript.",
        "Displaying products added to the cart with details like price, color, size, quantity, etc.",
        "The functionality provided to increase the quantity of a product, and changes in price to be displayed under each product and subtotal.",
        "Payment page checks for correct and incorrect credentials (hard-coded).",
      ],
    },
    // {
    //   id: 4,
    //   img: Skinstore,
    //   title: "SITE1",
    //   github: "",
    //   live: "",
    //   techStack: [
    //     {
    //       image: "",
    //       title: "",
    //     },
    //     {
    //       image: "",
    //       title: "",
    //     },
    //     {
    //       image: "",
    //       title: "",
    //     },
    //     {
    //       image: "",
    //       title: "",
    //     },
    //   ],
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
    // {
    //   id: 5,
    //   img: Skinstore,
    //   title: "SITE1",
    //   github: "",
    //   live: "",
    //   techStack: [
    //     {
    //       image: "",
    //       title: "",
    //     },
    //     {
    //       image: "",
    //       title: "",
    //     },
    //     {
    //       image: "",
    //       title: "",
    //     },
    //     {
    //       image: "",
    //       title: "",
    //     },
    //   ],
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
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
            <Content_port
              des={el.des}
              title={el.title}
              features={el.features}
            />
            <div className="btn_portfolio_tech_div">
              {el.techStack.map((tech) => (
                <>
                  <div className=" btn btn_portfolio_tech">
                    <span>{tech.image}</span>
                    <div key={tech.id}>{tech.title}</div>
                  </div>
                </>
              ))}
            </div>
            <div className="portfolio_item-cta">
              <a href={el.github} className="btn" target="_blank">
                GitHub
              </a>
              <a href={el.live} className="btn btn-primary" target="_blank">
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
