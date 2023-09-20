var findDuplicate = function(nums) {
  const map = {}

  for (let el of nums) {
      if(map[el]) return el
      else {
          map[el] = el
      }
  }

  return;
};