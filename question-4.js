// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function findMinQuantity(inventory) {
    return min.quantity < current.quantity ? min : current;
  }

let minQuantity = findMinQuantity(inventory);
console.log("สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า:", minQuantity);
