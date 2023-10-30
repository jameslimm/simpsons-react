const Filter = (props) => {
  let uniqueCharacterList = [];

  props.simpsons.forEach((item) => {
    if (!uniqueCharacterList.includes(item.character)) {
      uniqueCharacterList.push(item.character);
    }
  });

  uniqueCharacterList.sort();

  return (
    <div className="filter">
      <label htmlFor="name-select">Filter quotes by character:</label>
      <select id="name-select" onChange={props.onChange}>
        <option value="">- Show All -</option>
        <option value="--show-liked--">- Show Liked -</option>
        {uniqueCharacterList.map((name, i) => (
          <option key={i} id={i}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
