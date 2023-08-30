const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];

var merge = function (nums1, m, nums2, n) {
  const arr = nums2.slice(0, n);
  nums1.splice(m);
  nums1.push(...arr);
  nums1.sort((a, b) => a - b)
};

console.log(merge(arr1, 3, arr2, 2));

console.log(arr1);
