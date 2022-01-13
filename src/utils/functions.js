export const getRandomImgUrl = (arr) => {
  const url = Math.floor(Math.random() * arr.length);
  return arr[url];
};

export const buildGroupedData = (data) => {
  let arr = [];
  const grouped = [];
  const remainder = data.length % 4;
  const floor = Math.floor(data.length, 4);
  data.map((e, index) => {
    arr.push(e);
    if (arr.length === 4) {
      grouped.push(arr);
      arr = [];
    } else if (index >= remainder && grouped.length === floor) {
      grouped.push(arr);
    }
  });
  return grouped;
};
