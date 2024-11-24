const LinkedList = require("./linkedList")

const list = new LinkedList();

list.append(5);
list.append(8);
list.append(12);
console.log(list.toString()); // (5) -> (8) -> (12) -> null

list.prepend(2);
console.log(list.toString()); // (2) -> (5) -> (8) -> (12) -> null

console.log(list.at(3));    // 12
console.log(list.at(10));   // null

list.pop();
console.log(list.toString()); // (2) -> (5) -> (8) -> null

console.log(list.contains(9)); // false
console.log(list.contains(5)); // true

console.log(list.find(8));  // 2
console.log(list.find(1)); // null

console.log(list.size()); // 3

console.log(list.getHead()); // 2

console.log(list.getTail()); // 8

list.insertAt(7, 1);
console.log(list.toString()); // (2) -> (7) -> (5) -> (8) -> null

list.removeAt(2);
console.log(list.toString()); // (2) -> (7) -> (8) -> null
