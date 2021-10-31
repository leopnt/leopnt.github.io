import "../styles/WhatIDo.css";
import webDevIcon from "../assets/web-dev-icon.png";
import gameDevIcon from "../assets/game-dev-icon.png";
import appDevIcon from "../assets/app-dev-icon.png";

const WhatIDo = () => {
  return (
    <div className="WhatIDo">
      <h2>What I Do</h2>
      <div className="whatido-content">
        <div className="web-dev">
          <img src={webDevIcon} alt="web dev icon" />
          <h3>Fullstack Apps</h3>
        </div>
        <div className="game-dev">
          <img src={gameDevIcon} alt="game dev icon" />
          <h3>2D Games</h3>
        </div>
        <div className="app-dev">
          <img src={appDevIcon} alt="app dev icon" />
          <h3>Mobile Apps</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
