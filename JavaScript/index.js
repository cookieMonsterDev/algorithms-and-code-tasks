const arr = [1,1,2,3]

var removeElement = function(nums, val) {
  const a = nums.filter((e) => e !== val)
  arr.length = 0;
  arr.push(...a);
  return a.length
};

removeElement(arr, 3)

console.log(arr)