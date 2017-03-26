function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

function  find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }

    return currNode;
}

function insert(newEle, item) {
    var newNode = new Node(newEle);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while(!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }

    return currNode;
}

function remove(item) {
    var pre = this.findPrevious(item);
    if(!(pre.next != null)) {
        pre.next = pre.next.next;
    }
}

/************* Test code ************** */
var cities = new LinkList();
cities.insert("first", "head");
cities.insert("second", "first");
cities.display();
console.log("----------");
cities.insert("third", "first");
cities.display();

console.log("------------");
cities.remove("third");
cities.display();