const dashatize = (num: number) => {
  if(isNaN(num)){
    return 'NaN';
  }
  
  return Math.abs(num).toString().split(/([13579])/g).filter(a => a !== '').join('-');
};

console.log(dashatize(NaN))