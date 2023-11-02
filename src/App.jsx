import { useEffect, useCallback } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";

import "./App.css";
import { useDispatch } from "react-redux";
import { saveQuotes } from "./utils/simpsonsSlice";
import { fixData } from "./utils/fixData";
import Interface from "./components/Interface";

const App = () => {
  // TASK - Load API data and save to Redux store
  const dispatch = useDispatch();
  const loadSimpsonsData = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15`);
      const _data = fixData(data);
      dispatch(saveQuotes(_data));
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }, [dispatch]);

  useEffect(() => {
    loadSimpsonsData();
  }, [loadSimpsonsData]);

  return <Interface />;
};

export default App;
