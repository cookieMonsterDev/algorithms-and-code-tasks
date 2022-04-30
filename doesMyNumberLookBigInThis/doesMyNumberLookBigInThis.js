function narcissistic(value) {
    var valueString = String(value).split('').map(Number);
    return value == valueString.map(function (num) { return Math.pow(num, valueString.length); }).reduce(function (a, b) { return a + b; });
}
