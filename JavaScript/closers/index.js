// const memoize = (fn) => {
//     const cache = new Map();
//     return (...args) => {
//         const key = args.join();
//         if (cache.get(key)) {
//             return cache.get(key);
//         }
//         const res = fn(...args);
//         cache.set(key, res);
//         return res;
//     };
// };

function memoize(fn) {
    const mem = {}
    return function(...args) {
        const key = args.join(',');

        console.log(mem)

        if(mem[key] !== undefined) {
            console.log("caches")
            return mem[key];
        } else {
            console.log('count')
            const res = fn(...args);
            mem[key] = res;
            return res
        }
    }
}
const sum = (a, b) => {
    return a + b;
};
const memoizeSum = memoize(sum);

console.log(memoizeSum(101, 1));
console.log(memoizeSum(10, 11));
console.log(memoizeSum());
