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
      <h2>
        By <a href="https://www.darshanbaral.com/">Darshan</a>.
      </h2>
      <h3>
        Fork <a href="https://github.com/darshanbaral/react-hamburger">here</a>.
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Hamburger size={50} colors={["black", "red"]} delay="0.5s" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
