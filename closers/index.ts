const memoize = (fn) => {
  const cache = new Map();

 return (...args) => {
  const key = args.join();

  if(cache.get(key)) {
    return cache.get(key);
  }

  const res = fn(...args)
  cache.set(key, res);
  return res
 }
}

const sum = (a, b) => {
  console.log("sum");
  return a + b;
}

const memoizeSum = memoize(sum);

console.log(memoizeSum(1, 2));
console.log(memoizeSum(2, 3));
console.log(memoizeSum(1, 2));
console.log(memoizeSum(2, 3));