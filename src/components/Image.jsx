import React, { Component } from "react";

class Image extends Component {
  render() {
    const { characterDirection, image, alt } = this.props;

    // if image faces right, add the image on left class

    return <img alt={alt} className={characterDirection === "Left" ? "image-on-left" : ""} src={image} />;
  }
}

export default Image;
