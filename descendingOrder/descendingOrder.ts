function descendingOrder(n: number): number {
  return parseInt(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));
};
