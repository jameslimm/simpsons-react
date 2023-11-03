export const filterSimpsons = (simpsons, filter) => {
  switch (filter) {
    case "":
      return [...simpsons];
    case "--show-liked--":
      return simpsons.filter((item) => item.liked);
    default:
      return simpsons.filter((item) => item.shortname === filter);
  }
};
