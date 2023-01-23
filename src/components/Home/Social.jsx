import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/invites/contact/?i=48lc6y2f8dm9&utm_content=n9iqs2d"
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
