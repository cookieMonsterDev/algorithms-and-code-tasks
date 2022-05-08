var findOdd = function (xs) {
    var _loop_1 = function (i) {
        var count = xs.filter(function (value) { return value === xs[i]; }).length;
        if (count % 2 == 1) {
            return { value: xs[i] };
        }
    };
    for (var i = 0; i < xs.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
};
