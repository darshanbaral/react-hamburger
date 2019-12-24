import React, { useState } from "react";

function Hamburger(props) {
  const [isHamburger, setIsHamburger] = useState(true);

  const handleClick = () => {
    if (props.alsoRun) {
      props.alsoRun(!isHamburger);
    }
    setIsHamburger(!isHamburger);
  };

  const lineThickness = props.size / 12;
  const shiftLines = props.size / 2 - lineThickness;

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
          border: `solid ${lineThickness}px`,
          borderRadius: "calc(5px + 5%)",
          borderColor: isHamburger ? props.colors[0] : props.colors[1],
          padding: "0",
          width: "100%",
          transform: isHamburger
            ? "none"
            : `translate(0, ${shiftLines}px) rotate(45deg)`,
          transformOrigin: "50% 50%",
          transition: `all ${props.delay}`
        }}
      />
      <hr
        style={{
          margin: "0",
          border: `solid ${lineThickness}px`,
          borderRadius: "calc(5px + 5%)",
          borderColor: isHamburger ? props.colors[0] : props.colors[1],
          padding: "0",
          width: isHamburger ? "100%" : "0",
          opacity: isHamburger ? "100%" : "0",
          transition: `all ${props.delay}`
        }}
      />
      <hr
        style={{
          margin: "0",
          border: `solid ${lineThickness}px`,
          borderRadius: "calc(5px + 5%)",
          borderColor: isHamburger ? props.colors[0] : props.colors[1],
          padding: "0",
          width: "100%",
          transform: isHamburger
            ? "none"
            : `translate(0, -${shiftLines}px) rotate(-45deg)`,
          transformOrigin: "50% 50%",
          transition: `all ${props.delay}`
        }}
      />
    </div>
  );
}

export default Hamburger;
