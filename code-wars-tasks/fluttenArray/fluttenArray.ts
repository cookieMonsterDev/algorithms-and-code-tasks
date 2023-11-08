const nestedArray = [[1, [2]], [3, 4]]

const flutten = (arr) => {
  let res: any[] = [];

  arr.forEach(el => {
    if(Array.isArray(el)) {
      res = res.concat(flutten(el))
      return
    }

    return res.push(el)
  });

  return res
}

console.log(flutten(nestedArray))