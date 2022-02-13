import React, { useEffect, useState } from "react";

import "../styles/Skills.css";

const url = "http://localhost:8080/api/v1/skills";

const Skills = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setSkills(data);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  const content = () => {
    if (error) {
      return "WhoOps! Something went wrong 🤔";
    } else if (!isLoaded) {
      return "Loading...";
    } else {
      return skills.map((skill) => (
        <div key={skill.name}>
          {skill.name} | {skill.level} | {skill.favorite ? "❤️" : ""}
        </div>
      ));
    }
  };

  return (
    <div className="Skills" id="skills">
      <h2>Skills</h2>
      <div>{content()}</div>
    </div>
  );
};

export default Skills;
