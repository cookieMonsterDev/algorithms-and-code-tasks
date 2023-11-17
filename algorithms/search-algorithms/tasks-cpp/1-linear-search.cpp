#include <iostream>
#include <string>

using namespace std;

bool find(int arr[], int size, int value) {

  for(int i = 0; i < size; i++) {
    if(arr[i] == value) {
      return true;
    }
  }

  return false;
}

int main(void) {
  int arr[7] = {1, 2, 3, 4, 5, 6, 7};
  int searchNumber = 10;
  bool isInArray = find(arr, 7, searchNumber);

  if(isInArray) {
    cout << "The number " << searchNumber << " is in array";
  }
  else {
    cout << "The number " << searchNumber << " is not in array";
  }

  return 0;
}