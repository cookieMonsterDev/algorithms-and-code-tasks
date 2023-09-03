function arrayDiff(a, b) {
  if(!b || b.length === 0) return a;
  
  const res = [];

  for(let i of a) {
    if(!b.includes(i)) {
      res.push(i)
    }
  }
  
  return res
}

console.log(arrayDiff([1,2,3], [1, 2]))