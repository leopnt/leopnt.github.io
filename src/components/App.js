import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Whoami from "./Whoami";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Spacer from "./Spacer";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Whoami />
      <Projects />
      <Skills />
      <Spacer height={"200px"} />
      <Footer />
    </div>
  );
}

export default App;
