/** 
Sum list

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
 */

const sumList = (head) => {
  if(!head) return 0;
  let current = head;
  let sum = 0;
  
  while(current) {
    sum += current.val;
    current = current.next;
  }
  
  return sum;
};

//OR with recursion:

const sumListRec = (head) => {
  if(!head) return 0;
  return head.val + sumList(head.next);
};
