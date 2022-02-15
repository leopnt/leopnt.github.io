import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Whoami from "./Whoami";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Spacer from "./Spacer";

import "../styles/App.css";
import Links from "./Links";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Page">
        <Spacer height={"64px"} />
        <Welcome />
        <Spacer height={"128px"} />
        <Whoami />
        <Spacer height={"64px"} />
        <Links />
        <Spacer height={"64px"} />
        <Projects />
        <Spacer height={"64px"} />
        <Skills />
        <Spacer height={"64px"} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
