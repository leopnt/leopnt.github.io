import "../styles/App.css";
import { useState } from "react";
import Welcome from "./Welcome";
import WhatIDo from "./WhatIDo";
import Skills from "./Skills";
import LastWorks from "./LastWorks";
import Footer from "./Footer";
import ModalContact from "./ModalContact";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <div className="App-content">
        <Welcome showContact={showContact} setShowContact={setShowContact} />
        <WhatIDo />
        <Skills />
        <LastWorks />
        <ModalContact
          showContact={showContact}
          setShowContact={setShowContact}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
