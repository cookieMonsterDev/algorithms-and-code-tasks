var lengthOfLastWord = function(s) {
  const res = s.match(/\b\w+\b/g);
  return res[res.length - 1].length
};