import { useSelector } from "react-redux";
import { selectLoaded, selectSimpsons } from "../utils/simpsonsSlice";

import Filter from "./Filter";
import Spinner from "./Spinner";
import Characters from "./Characters";
import Links from "./Links";

const Interface = () => {
  // Task - show either the loading spinner or the quotes interface
  const simpsons = useSelector(selectSimpsons);
  const loaded = useSelector(selectLoaded);

  // Loading
  if (!loaded && simpsons && Object.keys(simpsons).length === 0) {
    return <Spinner />;
  }

  // Have data - show quotes
  return (
    <>
      <h1>Simpsons Quotes</h1>
      <Filter />
      <Characters />
      <Links />
    </>
  );
};

export default Interface;
