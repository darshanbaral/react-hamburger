import React from "react";

class Hamburger extends React.Component {
  state = { isHamburger: true };

  handleClick = () => {
    if (this.props.alsoRun) {
      this.props.alsoRun(!this.state.isHamburger);
    }
    this.setState({ isHamburger: !this.state.isHamburger });
  };

  render() {
    const colors = this.props.colors
      ? this.props.colors
      : { hamburger: "black", cross: "black" };
    const size = this.props.size ? this.props.size : 25;
    const lineThickness = size / 12;
    const shiftLines = size / 2 - lineThickness;
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "0"
        }}
        onClick={this.handleClick}
      >
        <hr
          style={{
            margin: "0",
            border: `solid ${lineThickness}px`,
            borderRadius: "calc(5px + 5%)",
            borderColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross,
            padding: "0",
            width: "100%",
            transform: this.state.isHamburger
              ? "none"
              : `translate(0, ${shiftLines}px) rotate(45deg)`,
            transformOrigin: "50% 50%",
            transition: `all ${this.props.delay}`
          }}
        />
        <hr
          style={{
            margin: "0",
            border: `solid ${lineThickness}px`,
            borderRadius: "calc(5px + 5%)",
            borderColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross,
            padding: "0",
            width: this.state.isHamburger ? "100%" : "0",
            opacity: this.state.isHamburger ? "100%" : "0",
            transition: `all ${this.props.delay}`
          }}
        />
        <hr
          style={{
            margin: "0",
            border: `solid ${lineThickness}px`,
            borderRadius: "calc(5px + 5%)",
            borderColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross,
            padding: "0",
            width: "100%",
            transform: this.state.isHamburger
              ? "none"
              : `translate(0, -${shiftLines}px) rotate(-45deg)`,
            transformOrigin: "50% 50%",
            transition: `all ${this.props.delay}`
          }}
        />
      </div>
    );
  }
}

export default Hamburger;
