import "../styles/Skills.css";
import cppIcon from "../assets/skills_icons/cpp.svg";
import nodeIcon from "../assets/skills_icons/node-js.svg";
import reactIcon from "../assets/skills_icons/react-brands.svg";
import flutterIcon from "../assets/skills_icons/cib-flutter.svg";
import godotIcon from "../assets/skills_icons/cib-godot-engine.svg";

const Skills = () => {
  return (
    <div className="Skills">
      <h2>Skills</h2>
      <div className="skills-content">
        <a href="https://en.wikipedia.org/wiki/C%2B%2B">
          <img className="skill-icon" src={cppIcon} alt="c++ icon" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Node.js">
          <img className="skill-icon" src={nodeIcon} alt="nodejs icon" />
        </a>
        <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
          <img className="skill-icon" src={reactIcon} alt="reactjs icon" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Flutter_(software)">
          <img className="skill-icon" src={flutterIcon} alt="flutter icon" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Godot_(game_engine)">
          <img className="skill-icon" src={godotIcon} alt="godot icon" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
