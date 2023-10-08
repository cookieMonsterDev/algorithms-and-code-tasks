const arr = [1,2,2,3]

var isMonotonic = function(s) {
  const news = s.toLowerCase().replace(/[^A-Za-z]/g,'').split('').reverse().join();
  return news
};

console.log(isMonotonic('ab_a'))