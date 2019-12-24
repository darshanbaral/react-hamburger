import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/sidebar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Sidebar icon="_" content={<h2 style={{ padding: "10px" }}>Hi</h2>} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
