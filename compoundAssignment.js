// find sum of all numbers

var myNumbers = [1, 2, 3, 4, 5]; // 15

// 1+2 = 3
// 3 + 3 = 6
// 6 +4 = 10
// 10 + 5 = 15

var addtotal = 0;
var multiplyTotal = 1;

myNumbers.forEach((x) => {
  //1st Iteration  total is 0

  addtotal += x; // total = total + x // compound assignment addition

  // 0+ 1 = 1 // total
  // 2+ 1 = 3 // total =3
  // 3 + 3 = 6 // total = 6
  // 4 + 6 = 10 // total = 10
  // 5 +10 = 15 // total = 15
});

console.log("Total sum is : " + addtotal);

myNumbers.forEach((x) => {
  multiplyTotal *= x; // multiplytotal = multiplyTotal * x;
});

console.log("The answer is  : " + multiplyTotal);
