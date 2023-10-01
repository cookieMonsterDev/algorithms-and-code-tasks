const arr = [1,2,2,3]

var isMonotonic = function(nums) {
  for(let i = 1; i <= nums.length; i++) {
      if(nums[i - 1] > nums[i]) {
        return false;
      }
  }

  return true;
};

console.log(isMonotonic(arr))