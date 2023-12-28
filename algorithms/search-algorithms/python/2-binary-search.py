# The binary search demands that the array of data being sorted in inc way.

def binarySearch(arr, target):
  left = 0
  right = len(list) - 1

  while right >= left:
    middle = (left + right) // 2
    value = arr[middle]

    if value == target:
      return target
    
    if value > target:
      right = middle - 1
    else: 
      left = middle + 1
    
  return -1

list = [10, 20, 30, 40, 50]

print(binarySearch(list, 20))
print(binarySearch(list, 100))