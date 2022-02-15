import React from "react";

import FavoriteIcon from "../assets/icons/like.png";

import "../styles/Skill.css";

const LevelBars = (level) => {
  let bars = [];
  for (let i = 0; i < 3; i++) {
    if (i < level) {
      bars.push(<div className="green-bar" key={i}></div>);
    } else {
      bars.push(<div className="white-bar" key={i}></div>);
    }
  }

  return bars;
};

const Skill = ({ name, level, favorite }) => {
  return (
    <div className="Skill">
      <div className="Left">
        <div className="Name">{name}</div>
        <div className="Level">{LevelBars(level)}</div>
      </div>
      <div className="Right">
        {favorite ? <img src={FavoriteIcon} alt="favorite" /> : ""}
      </div>
    </div>
  );
};

export default Skill;
