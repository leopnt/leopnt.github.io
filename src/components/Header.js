import React from "react";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <ul>
        <li>
          <a href="#Welcome">Welcome</a>
        </li>
        <li>
          <a href="#whoami">Whoami</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
