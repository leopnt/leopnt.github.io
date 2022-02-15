import React, { useEffect, useState } from "react";
import api_url from "../config";

import avatarImg from "../assets/avatar.png";

import "../styles/Welcome.css";
import Spacer from "./Spacer";

const url = api_url + "personal/";

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
      return (
        <div>
          WhoOps! Something went wrong{" "}
          <span role="img" aria-label="thinking face">
            🤔
          </span>
        </div>
      );
    } else if (!isLoaded) {
      return "Loading...";
    } else {
      return (
        <div>
          <h1>Hi, I'm {personalInfos.first_name}</h1>
          <div className="Title">{personalInfos.title}</div>
        </div>
      );
    }
  };

  return (
    <div className="Welcome">
      {content()}
      <Spacer height={"32px"} />
      <img src={avatarImg} alt="avatar" />
    </div>
  );
};

export default Welcome;
