import React, { useEffect, useState } from "react";
import api_url from "../config";

import LinkedinIcon from "../assets/icons/linkedin.png";
import GithubIcon from "../assets/icons/github.png";
import ItchIcon from "../assets/icons/itch.png";
import MailIcon from "../assets/icons/mail.png";

import "../styles/Links.css";

const url = api_url + "links";

const Links = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [links, setLinks] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setLinks(data);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  const getButton = (linkname) => {
    if (linkname.toLowerCase() === "linkedin") {
      return (
        <button className="Linkedin">
          <img src={LinkedinIcon} alt={linkname} />
        </button>
      );
    } else if (linkname.toLowerCase() === "github") {
      return (
        <button>
          <img src={GithubIcon} alt={linkname} />
        </button>
      );
    } else if (linkname.toLowerCase() === "itch.io") {
      return (
        <button>
          <img src={ItchIcon} alt={linkname} />
        </button>
      );
    } else if (linkname.toLowerCase() === "mail") {
      return (
        <button>
          <img src={MailIcon} alt={linkname} />
        </button>
      );
    }

    return linkname;
  };

  const content = () => {
    if (error) {
      return "WhoOps! Something went wrong 🤔";
    } else if (!isLoaded) {
      return "Loading...";
    } else {
      return links.map((link) => {
        return <a href={link.url}>{getButton(link.name)}</a>;
      });
    }
  };

  return (
    <div className="Links">
      <div className="Content">{content()}</div>
    </div>
  );
};

export default Links;
