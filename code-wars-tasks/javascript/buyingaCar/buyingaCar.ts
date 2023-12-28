function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
  
  let month = 0, interest;

    while (startPriceOld + (month * savingperMonth) < startPriceNew) {
        month++
        interest = 1 - (percentLossByMonth + 0.5 * Math.floor(month/2))/100;
        [startPriceOld,  startPriceNew] = [startPriceOld * interest,  startPriceNew * interest]
    }

    return [month, Math.round((month * savingperMonth + startPriceOld) - startPriceNew)]

};

console.log(nbMonths(2000, 8000, 1000, 1.5));
