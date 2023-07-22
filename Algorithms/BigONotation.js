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
};

///////////////////////////////////////////////////////////

//Power of two
const isPowerOfTwo = (n) => {
  const res = Math.log(n) / Math.log(2);
  return Number.isInteger(res);
};

//Another power of two
const anotherIsPowerOfTwo = (n) => {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
};

//BitWise power of two
const bitWiseIsPowerOfTwo = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};

//////////////////////////////////////////////

//Recursion

//Recursive fibonacci
const recFib = (n) => {
  if (n < 2) return n;
  return recFib(n - 1) + recFib(n - 2);
};

//Recursive factorial
const recFac = (n) => {
  if (n === 1) return 1;
  return n * recFac(n - 1);
};

//////////////////////////////////////////////

//Search Algorithms

//Linear seacrch O(n)
const linearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
};

//Binary search (work only on sorted array) O(log(n))
const binarySearch = (arr, t) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) return middleIndex;

    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

//Sorting alogorithms

// Quick sort O(nlog(n))
const quickSort = (arr) => {
  if(arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([8, 20, -2, 4, -6]));
