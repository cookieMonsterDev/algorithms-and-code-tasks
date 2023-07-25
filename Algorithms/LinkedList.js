// Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }

  insert(value, index) {
    if (index > this.size || index < 0) {
      console.log("invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      newNode.next = prev.next;
      prev.next = newNode;

      this.size++;
    }
  }

  removeFrom(index) {
    if (index >= this.size || index < 0) {
      console.log("invalid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    let prev = this.head;
    let removeNode;

    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    removeNode = prev.next;
    prev.next = removeNode.next;
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let curr = this.head;
    let list = "";
    while (curr) {
      list += `Node:${curr.value}; `;
      curr = curr.next;
    }
    console.log(list);
  }
}

const list = new LinkedList();

// console.log(list.isEmpty());
// console.log(list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
// list.print();
list.append(100);
// list.print();
list.insert(111, 2);
// list.print()
list.removeFrom(2);
list.print()
