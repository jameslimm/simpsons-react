import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    // if image faces right, add the image on left class
    return <img className={this.props.characterDirection === "Left" ? "image-on-left" : ""} src={this.props.image} />;
  }
}

export default Image;
