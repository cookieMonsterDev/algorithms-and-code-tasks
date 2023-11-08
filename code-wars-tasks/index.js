const fn = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((right + left) / 2);

    if (target === arr[middle]) return arr[middle];

    if(target < arr[middle]) {
      right = middle;
    }

    if(target > arr[middle]) {
      left = middle
    }
  }

  return -1
};

console.log(fn(arr, 7));
