const cache = []

var climbStairs = function(n) {
    if (n <= 2) return n
    if (!cache[n]) { cache[n] = climbStairs(n - 2) + climbStairs(n - 1) }
    return cache[n]
};

console.log(climbStairs(100));
