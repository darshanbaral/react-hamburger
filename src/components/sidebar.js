import React, { useState } from "react";
import Hamburger from "./hamburger";

function Sidebar(props) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: expand ? "100vw" : "0px",
        height: "100vh",
        position: "fixed",
        top: "0",
        right: "0",
        backgroundColor: "#6f6b6bba",
        transition: "all 0.3s"
      }}
    >
      {props.content}
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "15px"
        }}
        onClick={handleClick}
      >
        <Hamburger size={30} colors={["gray", "white"]} delay="0.5s" />
      </div>
    </div>
  );
}

export default Sidebar;
