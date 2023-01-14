function yourOrder (words:string):string {
  return words.split(' ').sort((a, b) => rep(a) - rep(b)).join(' ');
}

function rep (str: string): number {
  return parseInt(str.replace(/[^0-9.]/g, ''))
}

console.log(yourOrder("is2 Thi1s T4est 3a"))