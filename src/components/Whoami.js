import React, { useEffect, useState } from "react";

import legosImg from "../assets/legos.png";

import "../styles/Whoami.css";

const url = "http://localhost:8080/api/v1/personal";

const parseParaphraph = (paragraph) => {
  return (
    <div>
      {paragraph.split("\\n").map((line, i) => {
        const key = `paragraph-${i}`;
        if (line) {
          return <div key={key}>{line}</div>;
        }
        return <br key={key}></br>;
      })}
    </div>
  );
};

const Whoami = () => {
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
      return parseParaphraph(personalInfos.description);
    }
  };

  return (
    <div className="Whoami" id="whoami">
      <h2>Whoami</h2>
      <div>{content()}</div>
      <img src={legosImg} alt="legos" />
    </div>
  );
};

export default Whoami;
