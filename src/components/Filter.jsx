import React, { Component } from "react";

class Filter extends Component {
  render() {
    let uniqueCharacterList = [];

    this.props.simpsons.forEach((item) => {
      if (!uniqueCharacterList.includes(item.character)) {
        uniqueCharacterList.push(item.character);
      }
    });

    uniqueCharacterList.sort();

    return (
      <div className="filter">
        <label htmlfor="name-select">Filter quotes by character:</label>
        <select id="name-select" onChange={this.props.onChange}>
          <option value="">- Show All -</option>
          <option value="--show-liked--">- Show Liked -</option>
          {uniqueCharacterList.map((name, i) => (
            <option id={i}>{name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Filter;
