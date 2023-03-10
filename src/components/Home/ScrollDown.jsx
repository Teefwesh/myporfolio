import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16 2c1.103 0 2 .897 2 2v12c0 3.309-2.691 6-6 6s-6-2.691-6-6v-12c0-1.103.897-2 2-2h8zm4 2c0-2.209-1.791-4-4-4h-8c-2.209 0-4 1.791-4 4v12c0 4.418 3.582 8 8 8s8-3.582 8-8v-12zm-7 1c0-.552-.447-1-1-1s-1 .448-1 1v4c0 .552.447 1 1 1s1-.448 1-1v-4z" />
        </svg>

        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
