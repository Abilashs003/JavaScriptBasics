// to store multiple data in a single variable
// to store a collection of data
// we call them as arrays

// declaring an array

var shoppingList = ["rice", "maggi", "shampoo", "sugar", "ToorDal"];

// Nested multiple arrays inside one array
shoppingList = [
  ["rice", 56], // 0 th index
  ["maggi", 15], // 1st index
  ["shampoo", 12], // 2nd index
  ["sugar", 54],
  ["Toordal", 40],
  ["GroundnutOil", "coconutOiL", ["Parachute hair oil"]],
];

//indexes --> numbers assigned to each element/data in the array
var shampoo = shoppingList[2];
var shampooPrice = shoppingList[2][1];
console.log(shampooPrice);
console.log(shoppingList[5][1]);

shoppingList[5][2].push("Dabur Amla");

console.log(shoppingList);

console.log(`removed element : ${shoppingList[5].pop()}`);

console.log(shoppingList);

shoppingList.shift();
console.log(
  `removing first element of an array after shift function : ${shoppingList}`
);

shoppingList.unshift(["rice", 50]);
console.log(
  `adding first element of an array after unshift function : ${shoppingList}`
);

// shoppingList[5].push("Olive Oil");
// console.log(shoppingList);

// to remove a last elemnt from an array we will use pop() built in function only for an array

var numbers = [1, 2, 3];
var removedElement = numbers.pop();
console.log(removedElement);
console.log(numbers);

var fruits = ["apple", "mango", "grapes", "pomegranate"];
fruits.pop();
console.log(fruits);

// to add an an element to the last index of an array
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

var fruits = ["apple", "mango", "grapes"];
fruits.push("orange");
console.log(fruits);

// to add at the first index of an array ---> unshift()

var numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers);

// to remove the first element of an array ---> shift()

var numbers = [0, 1, 2, 3];
var removedElement = numbers.shift();
console.log(numbers);
