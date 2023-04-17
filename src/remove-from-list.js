//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');



function removeKFromList(l, k) {

  if (l === null) {
    return null;
  }
  
  while ((l !== null) && (l.value === k)) {
    l = l.next;
  }
  
  let prev = l;
  let cur = l.next;
  while (cur !== null) {
    if (cur.value === k) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  
  return l;
}


module.exports = {
  removeKFromList
};
