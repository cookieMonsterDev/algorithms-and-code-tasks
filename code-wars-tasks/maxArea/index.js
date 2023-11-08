var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    const width = right - left;

    const h = Math.min(height[left], height[right]);

    const w = width * h;

    area = Math.max(area, w);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), "res");