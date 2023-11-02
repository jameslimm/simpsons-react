import { useDispatch, useSelector } from "react-redux";
import { selectSimpsons, setFilter } from "../utils/simpsonsSlice";
import { makeUniqueCharacterList } from "../utils/makeUniqueCharacterList";

const Filter = () => {
  const dispatch = useDispatch();
  const simpsons = useSelector(selectSimpsons);

  let uniqueCharacterList = makeUniqueCharacterList(simpsons);

  return (
    <div className="filter">
      <label htmlFor="name-select">Filter quotes by character:</label>

      <select id="name-select" onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="">- Show All -</option>
        <option value="--show-liked--">- Show Liked -</option>

        {uniqueCharacterList.map((name, i) => (
          <option key={i}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
