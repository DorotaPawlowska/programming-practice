class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  };
};

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  addHead(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    };

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  addTail(val){
    let newNode = new Node(val);

    if(!this.head){ // ????????????
      this.head = newNode;
      this.tail = newNode;
    };

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  removeHead(){
    let removed = this.head; // ???????
    if(!this.head) return undefined;

    this.head = this.head.next; // ??????????? removed ??????????????????
    this.head.prev = null;

    this.length--;
    return removed; // ???????????????????????????????
  }

  removeTail(){
    let removed = this.tail; // ???????
    if(!this.tail) return undefined;

    if(this.length === 1){
      this.head = null;
      this.tail == null;
    };

    this.tail = removed.prev; 
    this.tail.next = null;

    this.length--;
    return removed; // ???????????????????????????????
  }

  find(index){
    console.log("find index " + index);
    let current;
    if(index < 0 || index >= this.length) return undefined;

    if(index <= this.length / 2){
      current = this.head;
      for(let i = 0; i< index; i++) current = current.next;
    } else {
      current = this.tail;
      for(let i = this.length; i > index; i--) current = current.prev;
    }
    return current;
  }

  insert(val, index){
    if(index < 0 || index > this.length) return null;
    if(index === this.length) return this.addTail(val);
    if(index === 0) return this.addHead(val);

    let prev = this.find(index - 1),
        newNode = new Node(val),
        temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    newNode.prev = prev;

    this.length++;
    return true;
  }

  remove(index){
    console.log(index + ' index remove');
    console.log(this.length + ' length remove before');
    if(index < 0 || index >= this.length) return null;
    if(index === this.length) return this.removeTail();
    if(index === 0) return this.removeHead();

    let removed = this.find(index);

    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;

    this.length--;
    return removed;
  } 

  update(val, index){
    let node = this.find(index);
    if(node) node.val = val;
    return node;
  }

  printList(){
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
        str += curr.val + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
  }

};

let ll = new LinkedList(); 
  
ll.insert(13, 0);
// ll.printList(); 
ll.insert(15, 1);
// ll.printList(); 
ll.insert(17, 2);
ll.printList(); 
// ll.remove(1);
// ll.printList();
ll.insert(20, 3); 
ll.printList();
ll.update(8, 1); 
// ll.printList();
ll.insert(5, 4);
ll.printList(); 
ll.remove(4);
ll.printList(); 
ll.remove(0);
ll.printList(); 
ll.remove(1);
ll.printList(); 
ll.remove(0);
ll.printList(); 
