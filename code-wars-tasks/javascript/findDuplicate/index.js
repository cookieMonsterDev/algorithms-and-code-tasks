var findDuplicate = function (nums) {
  const map = {};

  for (let el of nums) {
    if (map[el]) return el;
    else {
      map[el] = el;
    }
  }

  return;
};

/**
 * Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
  the smallest in lexicographical order
  among all possible results.
 */

var removeDuplicateLetters = function (s) {
  let stack = [];
  let seen = new Set();
  let lastOcc = {};
  for (let i = 0; i < s.length; i++) {
    lastOcc[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (!seen.has(c)) {
      while (
        stack.length &&
        c < stack[stack.length - 1] &&
        i < lastOcc[stack[stack.length - 1]]
      ) {
        seen.delete(stack.pop());
      }
      seen.add(c);
      stack.push(c);
    }
  }

  return stack.join("");
};

console.log(removeDuplicateLetters("bcabc")); // abc
