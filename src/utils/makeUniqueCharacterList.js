export const makeUniqueCharacterList = (simpsons) => {
  // Take simpsons array, loop through
  // and return a list of unique character names
  // in alphabetical order.

  let uniqueCharacterList = [];
  simpsons.forEach((item) => {
    if (!uniqueCharacterList.includes(item.character)) {
      uniqueCharacterList.push(item.character);
    }
  });

  uniqueCharacterList.sort();
  return uniqueCharacterList;
};
