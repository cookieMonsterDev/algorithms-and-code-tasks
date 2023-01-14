var dashatize = function (num) {
    if (isNaN(num)) {
        return NaN;
    }
    var arr = num.toString().split(/([13579])/g).filter(function (a) { return a !== ''; }).join('-');
    return arr;
};
console.log(dashatize(NaN));
