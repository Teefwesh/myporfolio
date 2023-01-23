import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./about.css";

const Info = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about__info grid">
      <div className="about__box" data-aos="flip-left" data-aos-duration="1500">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>

      <div
        className="about__box"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
