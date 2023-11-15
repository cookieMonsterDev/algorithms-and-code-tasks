/**
Reverse list

Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 */

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while(current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

//OR with recursion: