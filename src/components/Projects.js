import React, { useEffect, useState } from "react";
import Project from "./Project";
import api_url from "../config";

import "../styles/Projects.css";

const url = api_url + "projects";

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
        <Project
          key={project.name}
          title={project.name}
          description={project.description}
          imgUrl={project.cover_picture_url}
          topics={project.topics.split(",")}
          url={project.url}
        />
      ));
    }
  };

  return (
    <div className="Projects">
      <div className="anchor" id="projects" />
      <h2>Projects</h2>
      <div className="Content">{content()}</div>
    </div>
  );
};

export default Projects;
