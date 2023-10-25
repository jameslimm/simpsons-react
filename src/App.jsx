import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { data } = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10`);
      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  render() {
    if (!this.state.simpsons) {
      return <Spinner />;
    }

    const quotesJSX = this.state.simpsons.map((item, index) => {
      return <Character quoteFullData={item} key={index} />;
    });

    return (
      <>
        <h1>Simpsons Quotes</h1>
        {quotesJSX}
      </>
    );
  }
}

export default App;
