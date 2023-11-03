import { store } from "../utils/store";
import { saveQuotes } from "../utils/simpsonsSlice";
import { fixData } from "../utils/fixData";

import axios from "axios";

export const loadSimpsonsData = async () => {
  try {
    console.log("API CALL");
    const { data } = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15`);
    const _data = fixData(data);
    store.dispatch(saveQuotes(_data));
  } catch (e) {
    console.log("Looks like the API is down!");
  }
};
