import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  state = {};
  render() {
    return (
      <div>
        <Button button="Like" />
        <Button button="Share" />
      </div>
    );
  }
}

export default Controls;
