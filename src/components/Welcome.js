import "../styles/Welcome.css";
import "../styles/Buttons.css";
import Header from "./Header";
import glassWave from "../assets/glass-wave.png";

const Welcome = ({ showContact, setShowContact }) => {
  return (
    <div className="Welcome">
      <img className="glass-wave" src={glassWave} alt="glass wave background" />
      <Header showContact={showContact} setShowContact={setShowContact} />
      <div className="content">
        <h1>Hi, I'm Léo</h1>
        <p>Computer science student</p>
        <button
          className="lets-talk-button"
          onClick={(e) => {
            setShowContact(true);
          }}
        >
          Let's talk!
        </button>
      </div>
    </div>
  );
};

export default Welcome;
