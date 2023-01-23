import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Backend = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="skills__content"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Node Js</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MongoDb</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MERN Stack</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">SQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
