var ids = ["patient", "doctor", "surgeon", "", "employee", "patient"];

for (let index = 0; index < ids.length; index++) {
  checkID(ids[index]);
}

function checkID(id) {
  switch (id) {
    case "patient":
    case "doctor":
    case "surgeon":
    case "employee":
      console.log("permitted");
      break;
    default:
      console.log("not permitted");
  }
}

//functions

var a = 1;
var b = 2;

var c = 3;
var d = 4;

var e = 4;
var f = 8;

var g = 3;
var h = 7;

// 100 couple  100* 4 400 lines of code

arthimeticOperatins(a, b);
// arthimeticOperatins(c, d);

//void function
function arthimeticOperatins(num1, num2) {
  result = num1 + num2;
  results = num1 - num2;
  resultm = num1 * num2;
  resultd = num1 / num2;
  console.log(
    `result of these numbers : ${[result, results, resultm, resultd]}`
  );
}

// built in functions
// grocery shop, shop keeper he will define a code for every item in his shop
const readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

while (true) {
  rl.question("Enter The ID : ", function (i) {
    //   var i = "3,52,24"; // 42 is the ID , 22 is the rupees , 3 is the stock
    //   //42,25,3
    var result = i.split("").reverse().join("").split(",");

    var ID = result[0];
    var price = result[1];
    var stock = result[2];
    console.log(`id : ${ID} , price : ${price}, stock : ${stock}`);
  });
}
