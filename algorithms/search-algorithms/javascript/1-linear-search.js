// O(n)

const linearSearch = (arr, target) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) return arr[i];
  }

  return -1;
};