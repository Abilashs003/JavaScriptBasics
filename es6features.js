// Default parameters

var link = function (hieght = 50, color, url) {
  var hieght = hieght;
  var color = color || "red";
  var url = url || "www.google.com";

  console.log(url);
  console.log(hieght);
};

link();
// if any value is undefined and you dont want to send it as undefined you will default parameters to replace undefined

// destructing feature
array = [1, 2, 3, 4, 5];

var [, a, , b] = array;

console.log(a);
console.log(b);
var num1 = 2;
var num2 = 3;

[num1, num2] = [num2, num1];

console.log(num1);

// rest and spread property

function sum(x, ...y) {
  total = x;
  console.log(y);
  for (let index = 0; index < y.length; index++) {
    total += y[index];
  }

  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 3, 3, 3, 3, 3, 3));

// spread operator
var a = [1, 2, 3];
function sumspread(x, y, z) {
  return x + y + z;
}

console.log(sumspread(...a));
