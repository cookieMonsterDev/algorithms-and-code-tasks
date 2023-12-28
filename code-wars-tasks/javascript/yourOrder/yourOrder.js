function yourOrder(words) {
    return words.split(' ').sort(function (a, b) { return rep(a) - rep(b); }).join(' ');
}
function rep(str) {
    return parseInt(str.replace(/[^0-9.]/g, ''));
}
console.log(yourOrder("is2 Thi1s T4est 3a"));
