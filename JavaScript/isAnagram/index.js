var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  const map = {};

  for(let i of s) {
      map[i] = map[i] ? map[i] + 1 : 1;
  }

  for(let j of t) {
      if(!map[j] || map[j] === 0) {
          return false;
      }
      else {
          map[j]--
      }
  }

  return true;
};

console.log(isAnagram("anagram", 'nagarak'))