//const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return;
    }
    const removedNode = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return removedNode.value;
  }

 

  getUnderlyingList() 
  {
    let str = '';
    let current = this.head;
    while (current) {
      str += `{"value":${current.value},"next":`;
      if (current.next) {
        str += '{';
      } else {
        str += 'null';
      }
      current = current.next;
    }
    str += '}'.repeat(this.length - 1);
   
    str = str.replace(/\\/g, '');

    return str;
  }
}



module.exports = {
  Queue
};
