import React, { useEffect, useState } from "react";

import "../styles/Projects.css";

const url = "http://localhost:8080/api/v1/projects";

const Projects = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setProjects(data);
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
      return projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ));
    }
  };

  return (
    <div className="Projects" id="projects">
      <h2>Projects</h2>
      <div>{content()}</div>
    </div>
  );
};

export default Projects;
