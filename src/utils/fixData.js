export const fixData = (data) => {
  const _data = [...data];

  // tidy up imported API data
  _data.forEach((item) => {
    item.id = Math.round(Math.random() * 1000000);
    item.liked = false;
  });

  return _data;
};
