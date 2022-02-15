import React from "react";

import LinkIcon from "../assets/icons/link.png";

import "../styles/Project.css";

const Project = ({ title, description, imgUrl, topics, url }) => {
  return (
    <div className="Project">
      <div className="Head">
        <h3 className="Title">{title}</h3>
        <div className="Description">{description}</div>
      </div>
      <div className="ImgContainer">
        <img src={imgUrl} alt="cover"></img>
      </div>
      <div className="Topics">
        {topics.map((topic) => {
          return <div key={topic}>{topic}</div>;
        })}
      </div>
      <a href={url}>
        <button>
          <img src={LinkIcon} alt="project url" />
          <div className="Label">View project</div>
        </button>
      </a>
    </div>
  );
};

export default Project;
