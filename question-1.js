// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
//myTodo.push({'id':5, todo: "Walk the dog"});
//console.log(myTodo);

myTodo[3].todo = "Go to gym";
console.log(myTodo);
//myTodo.pop();
//console.log(myTodo);

const lastItem = myTodo[myTodo.length - 1];
console.log(`"To-do id: ${lastItem.id}, ${lastItem.todo}"`);



