var countPalindromicSubsequence = function(s) {
  let count = 0;
  const uniq = new Set(s);

  for(const c of uniq) {
    const start = s.indexOf(c);
    const end = s.lastIndexOf(c);

    if(start < end) {
      count += new Set(s.slice(start + 1, end)).size;
    }
  }

  return count
};

console.log(countPalindromicSubsequence("bbcbaba"))