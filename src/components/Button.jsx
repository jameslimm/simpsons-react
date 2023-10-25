import React, { Component } from "react";

class Button extends Component {
  render() {
    const { button, id, highlight, onClick } = this.props;
    return (
      <button id={id} className={highlight ? "highlighted" : "not-highlighted"} onClick={onClick}>
        {button}
      </button>
    );
  }
}

export default Button;
