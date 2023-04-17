const { NotImplementedError } = require('../extensions/index.js');


class Stack {

  constructor()
    {
        this.arr = [];
    }
  

  push( element ) {
    this.arr.push(element);
  }

  pop() {
    if (this.arr.length == 0)
        return;
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = {
  Stack
};
