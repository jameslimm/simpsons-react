import { useSelector } from "react-redux";
import { selectFilter, selectSimpsons } from "../utils/simpsonsSlice";
import { filterSimpsons } from "../utils/filterSimpsons";
import Character from "./Character";
import NoResults from "./NoResults";

const Characters = () => {
  const simpsons = useSelector(selectSimpsons);
  const filter = useSelector(selectFilter);

  const filteredResults = filterSimpsons(simpsons, filter);

  // if there are no results:
  if (!filteredResults.length) {
    return <NoResults />;
  }

  return filteredResults.map((item, index) => {
    return <Character quoteFullData={item} key={index} />;
  });
};

export default Characters;
