var repeatedSubstringPattern = function (s) {
  const doubled = s + s;
  const sub = doubled.slice(1, -1);
  return sub.includes(s);
};

console.log(repeatedSubstringPattern("abab"));
