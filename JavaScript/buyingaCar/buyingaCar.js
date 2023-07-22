function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    var _a;
    var month = 0, interest;
    while (startPriceOld + (month * savingperMonth) < startPriceNew) {
        month++;
        interest = 1 - (percentLossByMonth + 0.5 * Math.floor(month / 2)) / 100;
        _a = [startPriceOld * interest, startPriceNew * interest], startPriceOld = _a[0], startPriceNew = _a[1];
    }
    return [month, Math.round((month * savingperMonth + startPriceOld) - startPriceNew)];
}
;
console.log(nbMonths(2000, 8000, 1000, 1.5));
