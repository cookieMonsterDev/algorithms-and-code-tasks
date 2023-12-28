var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const res = [];

  for (let i = 1; i <= numRows; i++) {
    let arr = [];

    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        arr.push(1);
      } else {
        arr.push(res[i - 2][j - 1] + res[i - 2][j]);
      }
    }

    res.push(arr);
  }

  return res;
};

console.log(generate(5));
