import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

class Character extends Component {
  state = {};
  render() {
    // Deconstruct props, only send required data to each child component
    const { image, character, quote, characterDirection } = this.props.quoteFullData;
    return (
      <div className="quote-box">
        <div>
          <Name name={character} />
          <Quote quote={quote} />
          <Controls />
        </div>
        <Image image={image} characterDirection={characterDirection} />
      </div>
    );
  }
}

export default Character;
