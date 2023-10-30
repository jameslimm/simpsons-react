import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Character from "./components/Character";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [simpsons, setSimpsons] = useState(null);
  const [filter, setFilter] = useState("");

  const loadSimpsonsData = async () => {
    try {
      console.log("API CALL");
      const { data } = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15`);

      data.forEach((item) => {
        item.id = Math.round(Math.random() * 1000000);
        item.liked = false;
      });

      setSimpsons(data);
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  };

  useEffect(() => {
    loadSimpsonsData();
  }, []);

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const onDeleteClicked = (e) => {
    setSimpsons(simpsons.filter((item) => item.id !== Number(e.target.id)));
  };

  const onLikeClicked = (e) => {
    const newData = simpsons.map((item) => {
      if (item.id === Number(e.target.id)) {
        return { ...item, liked: !item.liked };
      } else {
        return { ...item };
      }
    });
    setSimpsons(newData);
  };

  if (!simpsons) {
    console.log("NO SIMPSONS DATA HERE");
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
    return <Character quoteFullData={item} key={index} onLikeClicked={onLikeClicked} onDeleteClicked={onDeleteClicked} />;
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
      <Filter simpsons={simpsons} onChange={onFilterChange} />
      {quotesJSX}
    </>
  );
};

export default App;
