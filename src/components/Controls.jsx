import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    const { onLikeClicked, onDeleteClicked, id, liked } = this.props;
    return (
      <div>
        <Button button={liked ? "Liked" : "Like"} highlight={liked} id={id} onClick={onLikeClicked} />
        <Button button="Delete" id={id} onClick={onDeleteClicked} />
      </div>
    );
  }
}

export default Controls;
