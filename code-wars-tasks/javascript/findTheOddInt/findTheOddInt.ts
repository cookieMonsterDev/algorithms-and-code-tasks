const findOdd = (xs: number[]): number => {
    for(let i = 0; i < xs.length; i++){
      const count = xs.filter(value => value === xs[i]).length;
      if(count % 2 == 1){
        return xs[i];
      }
    }
    return -1;
}