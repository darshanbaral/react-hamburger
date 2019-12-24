import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hamburger from "./components/hamburger";

import "./styles.css";

function App() {
  const [isHamburger, setIsHamburger] = useState("true");
  const myFunction = (isHamburger = true) => {
    setIsHamburger(isHamburger);
  };
  return (
    <div className="App">
      <h1>{isHamburger ? "Hamburger" : "Cross"}</h1>
      <p>
        By <a href="https://www.darshanbaral.com/">Darshan</a>. Fork{" "}
        <a href="https://github.com/darshanbaral/react-hamburger">here</a>.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Hamburger
          size={75}
          colors={{ hamburger: "black", cross: "red" }}
          delay="0.5s"
          alsoRun={myFunction}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
