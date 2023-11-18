/**
Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.
 */

const sort = (array) => {
  let min;

  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min = j;
      }

      let temp = array[min];
      array[min] = array[i];
      array[i] = temp
    }
  }
};
