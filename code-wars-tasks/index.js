var canConstruct = (str, map) => {
  for(let l of str) {
    if(map[l] <= 0 || !map[l]) {
      return 0 
    }
    else {
      map[l] -= 1;
    } 
  }

  return str.length;
}

var countCharacters = function(words, chars) {
  const charsMap = {};
  let sum = 0;

  for(let l of chars) {
      if(!charsMap[l]) {
          charsMap[l] = 1
      }
      else {
          charsMap[l] += 1;
      }
  }

  for(let item of words) {
      sum += canConstruct(item, {...charsMap})
  }

  return sum;
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
