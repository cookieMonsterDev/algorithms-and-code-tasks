/**
zipper lists

Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
 */

const zipperLists = (head1, head2) => {
  let tail = head1;
  let left = head1.next;
  let right = head2;
  let count = 0;

  while (left && right) {
    if (count % 2 === 0) {
      tail.next = right;
      right = right.next;
    } else {
      tail.next = left;
      left = left.next;
    }
    tail = tail.next;

    count++;
  }

  if (left) tail.next = left;
  if (right) tail.next = right;

  return head1;
};

//Or with recursion:

const zipperListsRec = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  return head1;
};
