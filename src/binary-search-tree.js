const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  
  add_recursion(node, data) {
    if (node===null) {
      return new Node(data);
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      node.left = this.add_recursion(node.left, data);
    } else {
      node.right = this.add_recursion(node.right, data);
    }

    return node;
  }



  has_recursion(node, data) {
    if (node===null) {
      return false;
    }

    if (node.data === data) {
      return true;
    }
    if(data < node.data){return this.has_recursion(node.left, data)  }
    else {return this.has_recursion(node.right, data)  }
  }

  find_recursion(node, data) {
    if (node===null) {
      return false;
    }

    if (node.data === data) {
      return node;
    }

    return data < node.data ? 
    this.find_recursion(node.left, data) : 
    this.find_recursion(node.right, data);
  }

  removeNode(node, data) {
    if (node===null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      
      if ((node.left===null) && (node.right===null)) {
       
        return null;
      }

      if (node.left===null) {
      
        node = node.right;
        return node;
      }

      if (node.right===null) {
   
        node = node.left;
        return node;
      }


      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;

      node.right = this.removeNode(node.right, minFromRight.data);

      return node;
    }
  }











  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = this.add_recursion(this.rootTree, data);  
  }
  

  has(data) {
    return this.has_recursion(this.rootTree, data); 
  }

  

  find( data ) {
    if(this.has(data)){
      return this.find_recursion(this.rootTree, data);
}
    else {return null;}
  }

  

  remove(data) {
    this.rootTree = this.removeNode(this.rootTree, data);
  }

  
 

  min() {
    if (this.rootTree===null) {
      return;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (this.rootTree===null) {
      return;
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
