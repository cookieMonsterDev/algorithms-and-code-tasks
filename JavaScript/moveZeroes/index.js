const arr = [0,1,3,4]

var moveZeroes = function(nums) {
  nums.sort((a, b) => {
		if(b === 0 && a !== 0) {
      return -1
    } 
		return 0
	})
};

moveZeroes(arr)

console.log(arr)