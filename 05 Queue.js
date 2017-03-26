/*
*   队列的实现
×   队列的特点是先进先出(FIFO)
*/

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var result = "";
    for(var i=0;i<this.dataStore.length;++i) {
        result += this.dataStore[i] +", ";
    }

    return result;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}


//*************** Test code *************/

var q = new Queue();
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
console.log(q.toString());
console.log("dequeue: ", q.dequeue());
console.log(q.toString());
console.log("Front: ", q.front());
console.log("End： ", q.back());