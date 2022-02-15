import React, { useEffect, useState } from "react";
import api_url from "../config";

import "../styles/Skills.css";
import Skill from "./Skill";

const url = api_url + "skills";

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
        <Skill
          key={skill.name}
          name={skill.name}
          level={skill.level}
          favorite={skill.favorite}
        />
      ));
    }
  };

  return (
    <div className="Skills">
      <div className="anchor" id="skills" />
      <h2>Skills</h2>
      <div className="CRT">
        <div className="Content">{content()}</div>
      </div>
    </div>
  );
};

export default Skills;
