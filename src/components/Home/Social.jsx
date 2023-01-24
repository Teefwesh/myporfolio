import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://instagram.com/tee_fw3sh?igshid=YmMyMTA2M2Y="
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/efeakpor-oghenetega-3379a0124"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="/" className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
