/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countTriples = function(n) {
  let count = 0; 
  const c = n ** 2;

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      const a = i ** 2;
      const b = j ** 2
      console.log(a + b, c)

      if(a + b === c) count++
    }
  }

  return count;
};

console.log(countTriples(10))