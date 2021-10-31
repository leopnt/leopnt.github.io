import "../styles/Header.css";
import "../styles/Buttons.css";
import logo from "../assets/logo.png";
import itchIcon from "../assets/itch-io.svg";
import githubIcon from "../assets/github.svg";

const Header = ({ showContact, setShowContact }) => {
  return (
    <div className="Header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <button
          className="contact-button"
          onClick={(e) => {
            setShowContact(true);
          }}
        >
          CONTACT
        </button>

        <a href="https://leopnt.itch.io/">
          <img src={itchIcon} alt="itch.io icon" />
        </a>
        <a href="https://github.com/leopnt/">
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
