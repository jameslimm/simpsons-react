import "./App.css";

import Interface from "./components/Interface";
import { loadSimpsonsData } from "./controllers/apiController";
import { store } from "./utils/store";
import { setFilter } from "./utils/simpsonsSlice";

export const loader = ({ params }) => {
  // react router loader
  // -- fetch simpsons data if it hasn't been loaded
  // -- if url parameters passed, set the filter
  if (!store.getState().simpsons.loaded) loadSimpsonsData();
  if (params.charShortName) store.dispatch(setFilter(params.charShortName));
  return null;
};

const App = () => {
  return <Interface />;
};

export default App;
