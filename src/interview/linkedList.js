class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(root) {
    this.root = root;
  }
  printNodes(){
    let currentNode = this.root;
    while (currentNode != null) {
      console.log("value of node is "+currentNode.value);
      currentNode = currentNode.nextNode;
    }
  };
  }
  let reverse = function(head) {
    if (head == null) {
      return head;
    }
     let previous = null;
     let current = head;
    while (current != null) {
      let t = current.nextNode;
      current.nextNode = previous;
      previous = current;
      current = t;
    }
    return previous;
  }

var node1 = new Node (1,null);
var node2 = new Node (2,null);
var node3 = new Node (3,null);

node1.nextNode = node2;
node2.nextNode = node3;
var linkedList = new LinkedList(node1);
linkedList.printNodes();
linkedList.root=reverse(linkedList.root);
linkedList.printNodes();
