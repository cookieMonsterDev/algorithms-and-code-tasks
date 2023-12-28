
def linerSearch(arr, target):
  for i in arr:
    if i == target:
      return i
  return -1

list = [10, 20, 30, 40, 50]

print(linerSearch(list, 30))
print(linerSearch(list, 100))