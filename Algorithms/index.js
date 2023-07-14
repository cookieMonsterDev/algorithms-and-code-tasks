//Big-O notation

///////////////////////////////////////////////////////////

//Fibonacci sequence  O(n)
const myFibonacci = (n) => {
  if (n === 0) return;

  if (n === 1) return [0];

  if (n === 2) return [0, 1];

  const res = [0, 1];
  for (let i = 1; i <= n - 2; i++) {
    const next = res[res.length - 1] + res[res.length - 2];
    res.push(next);
  }

  return res;
};

//Another fibonacci O(n)
const anotherFibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

/////////////////////////////////////////////////////////////

//Factorial O(n)

const myFactorial = (n) => {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
};

////////////////////////////////////////////////////////////

//Prime Number O(n)
const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
};

//Another Prime O(sqrt(n))
const anotherIsPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

///////////////////////////////////////////////////////////