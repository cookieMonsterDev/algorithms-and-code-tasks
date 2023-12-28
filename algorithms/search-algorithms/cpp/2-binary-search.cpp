#include <iostream>
#include <string>
#include <cmath>

using namespace std;

bool find(int arr[], int size, int value) {
  int left = 0;
  int right = size - 1;

  while (right > left)
  {
    int middle = floor((left + right) / 2);

    if(value == arr[middle]) {
      return true;
    }

    if(value > arr[middle]) {
      left = middle + 1;
    }

    if(value < arr[middle]) {
      right = middle - 1;
    }
  }

  return false;
}

int main(void) {
  int arr[7] = {1, 2, 3, 4, 5, 6, 7};
  int searchNumber = 10;
  bool isInArray = find(arr, sizeof(arr), searchNumber);

  if(isInArray) {
    cout << "The number " << searchNumber << " is in array";
  }
  else {
    cout << "The number " << searchNumber << " is not in array";
  }

  return 0;
}