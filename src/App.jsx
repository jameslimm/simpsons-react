import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Character from "./components/Character";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  state = { filter: "" };

  async componentDidMount() {
    try {
      const { data } = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15`);

      // add id and liked to the state data
      const fixedData = data.map((item) => {
        return { ...item, id: Math.round(Math.random() * 1000000), liked: false };
      });

      this.setState({ simpsons: fixedData });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  onDeleteClicked = (e) => {
    this.setState({ simpsons: this.state.simpsons.filter((item) => item.id !== Number(e.target.id)) });
  };

  onLikeClicked = (e) => {
    const newData = this.state.simpsons.map((item) => {
      let { liked, id, ...rest } = item;
      if (id === Number(e.target.id)) liked = !liked;
      return { ...rest, id, liked };
    });
    this.setState({ simpsons: newData });
  };

  render() {
    const { simpsons, filter } = this.state;

    if (!simpsons) {
      return <Spinner />;
    }

    let filteredResults = [];

    switch (filter) {
      case "":
        filteredResults = [...simpsons];
        break;
      case "--show-liked--":
        filteredResults = simpsons.filter((item) => item.liked);
        break;
      default:
        filteredResults = simpsons.filter((item) => item.character === filter);
        break;
    }

    let quotesJSX = filteredResults.map((item, index) => {
      return <Character quoteFullData={item} key={index} onLikeClicked={this.onLikeClicked} onDeleteClicked={this.onDeleteClicked} />;
    });

    // if there are no results:
    if (filteredResults.length === 0) {
      quotesJSX = (
        <div className="no-results">
          <h3>D'oh!</h3>
          <p>No results.</p>
        </div>
      );
    }

    return (
      <>
        <h1>Simpsons Quotes</h1>
        <Filter simpsons={this.state.simpsons} onChange={this.onFilterChange} />
        {quotesJSX}
      </>
    );
  }
}

export default App;
