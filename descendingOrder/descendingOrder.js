function descendingOrder(n) {
    // console.log(typeof (parseInt(n.toString().split('').map(Number).sort((a, b) => b - a).join(''))));
    return parseInt(n.toString().split('').map(Number).sort(function (a, b) { return b - a; }).join(''));
}
;
console.log(descendingOrder(145263));
