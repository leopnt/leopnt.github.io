import React, { useEffect, useState } from "react";

import avatarImg from "../assets/avatar.png";

import "../styles/Welcome.css";

const url = "http://localhost:8080/api/v1/personal";

const Welcome = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [personalInfos, setPersonalInfos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setPersonalInfos(data[0]);
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
      return (
        <div>
          <h2>Hi, I'm {personalInfos.first_name}</h2>
          <div>{personalInfos.title}</div>
        </div>
      );
    }
  };

  return (
    <div className="Welcome" id="welcome">
      {content()}
      <img src={avatarImg} alt="avatar" />
    </div>
  );
};

export default Welcome;
