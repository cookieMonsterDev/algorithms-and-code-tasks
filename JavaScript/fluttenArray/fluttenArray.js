var nestedArray = [[1, [2]], [3, 4]];
var flutten = function (arr) {
    var res = [];
    arr.forEach(function (el) {
        if (Array.isArray(el)) {
            res = res.concat(flutten(el));
            return;
        }
        return res.push(el);
    });
    return res;
};
console.log(flutten(nestedArray));
