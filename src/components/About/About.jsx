import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import DarkAboutImg from "../../assets/Tega2c.jpg";
import AboutImg from "../../assets/Tega.jpeg";
import Info from "./Info";

const About = ({ theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle"> Introduction</span>

      <div className="about__container container grid">
        <img
          src={theme === "dark" ? DarkAboutImg : AboutImg}
          alt=""
          className="about__img"
          data-aos="fade-right"
          data-aos-duration="1500"
        />

        <div className="about__data">
          <Info />

          <p
            className="about__description"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Frontend developer, I create responsive web pages, I have years of
            experience and many clients are happy with the projects carried out.
          </p>

          <a
            href="#contact"
            className="button button--flex"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
