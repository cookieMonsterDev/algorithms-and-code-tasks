/**
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
 */
const arr = [6, 3, 0, 5];

const sort = (array) => {
  let swapped = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
};

sort(arr);

console.log(arr);
