// The binary search demands that the array of data being sorted in inc way.
// O(log(n))

const binarySearch = (arr, target) => {
  let left = 0;
  let right = target.length - 1;

  while (left < right) {
    const middle = Math.floor((right + left) / 2);
    const valueInTheMiddle = arr[middle];

    if (target === valueInTheMiddle) return valueInTheMiddle;

    if (target < valueInTheMiddle) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return -1;
};
