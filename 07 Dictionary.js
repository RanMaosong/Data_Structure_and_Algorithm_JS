function Dictionary() {
    this.data = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.data[key] = value;
}

function find(key) {
    return this.data[key];
}

function remove(key) {
    delete this.data[key];
}

function showAll() {
    for(var key in Object.keys(this.data)) {
        console.log(key + "->" + this.data[key]);
    }
}

/************* Test Code *************/

var book = new Dictionary();
book.add("Mike", "123");
book.add("David", "345");
book.add("Cynthia", "456");
console.log("David->", book.find("David"));
book.remove("David");
book.showAll();