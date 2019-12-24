import React, { useState } from "react";

function Hamburger(props) {
  const [cross, setCross] = useState(false);

  const handleClick = () => {
    setCross(!cross);
  };

  const lt = props.size / 12;
  const shift = props.size / 2 - lt;

  return (
    <div
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        padding: "0"
      }}
      onClick={handleClick}
    >
      <hr
        style={{
          margin: "0",
          border: `solid ${lt}px`,
          borderRadius: "calc(5px + 5%)",
          borderColor: cross ? props.colors[1] : props.colors[0],
          padding: "0",
          width: "100%",
          transform: cross ? `translate(0, ${shift}px) rotate(45deg)` : "none",
          transformOrigin: "50% 50%",
          transition: `all ${props.delay}`,
          color: cross ? "white" : "black"
        }}
      />
      <hr
        style={{
          margin: "0",
          border: `solid ${lt}px`,
          borderRadius: "calc(5px + 5%)",
          borderColor: cross ? props.colors[1] : props.colors[0],
          padding: "0",
          width: cross ? "0" : "100%",
          opacity: cross ? "0" : "100%",
          transition: `all ${props.delay}`
        }}
      />
      <hr
        style={{
          margin: "0",
          border: `solid ${lt}px`,
          borderRadius: "calc(5px + 5%)",
          borderColor: cross ? props.colors[1] : props.colors[0],
          padding: "0",
          width: "100%",
          transform: cross
            ? `translate(0, -${shift}px) rotate(-45deg)`
            : "none",
          transformOrigin: "50% 50%",
          transition: `all ${props.delay}`,
          color: cross ? "white" : "black"
        }}
      />
    </div>
  );
}

export default Hamburger;
