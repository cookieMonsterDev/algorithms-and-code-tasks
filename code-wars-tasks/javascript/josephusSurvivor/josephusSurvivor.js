function josephusSurvivor(n, k) {
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    let index = 0;
    while (arr.length > 1) {
        index = (index + k - 1) % arr.length;
        arr.slice(index, 1);
    }
    return arr;
}
console.log(josephusSurvivor(7, 3));
