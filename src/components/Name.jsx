import React, { Component } from "react";

class Name extends Component {
  render() {
    const { name } = this.props;
    return <h2>{name}</h2>;
  }
}

export default Name;
