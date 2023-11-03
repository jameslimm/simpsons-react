export const makeUniqueCharacterList = (simpsons) => {
  // Take simpsons array, loop through
  // and return a list of unique character names
  // in alphabetical order.

  // store an array of objects { name: "Homer Simpson", url: "homer-simpson" }

  let uniqueCharacterList = [];

  simpsons.forEach((item) => {
    if (uniqueCharacterList.findIndex((listitem) => listitem.name === item.character) === -1) {
      uniqueCharacterList.push({
        name: item.character,
        shortname: item.shortname,
      });
    }
  });

  uniqueCharacterList.sort((itemA, itemB) => {
    if (itemA.name > itemB.name) return 1;
    if (itemA.name < itemB.name) return -1;
    return 0;
  });

  return uniqueCharacterList;
};
