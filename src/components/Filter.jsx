import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectSimpsons, setFilter } from "../utils/simpsonsSlice";
import { makeUniqueCharacterList } from "../utils/makeUniqueCharacterList";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const simpsons = useSelector(selectSimpsons);
  const filter = useSelector(selectFilter);

  const navigate = useNavigate();

  let uniqueCharacterList = makeUniqueCharacterList(simpsons);

  // Deal with changing selector
  const selectChange = (e) => {
    const { value } = e.target;

    dispatch(setFilter(value));

    // Do router nav if needed
    if (value == "" || value == "--show-liked--") {
      navigate("/");
    } else {
      navigate("/" + value);
    }
  };

  return (
    <div className="filter">
      <label htmlFor="name-select">Filter quotes by character:</label>

      <select value={filter} id="name-select" onChange={selectChange}>
        <option key={"showAll"} value="">
          - Show All -
        </option>
        <option key={"showLiked"} value="--show-liked--">
          - Show Liked -
        </option>

        {uniqueCharacterList.map((item, i) => (
          <option key={item.shortname} value={item.shortname}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
