// check two given numbers
// you have to check if any number is equal to 50 or if thier sum is equal to 50

// 50,15 --> check whether these numbers are equal to 50  then print("i found a magical number")

// 25, 25 --> check whether these numbers are equal to 50  then print("i found a magical number") =>
//  check whether thier sum is equal to 50

var numberone = 51;
var numbertwo = 5;

//logarithimic expression
var result =
  numberone == 50 || numbertwo == 50
    ? true
    : numberone + numbertwo == 50
    ? true
    : false;

if (result) {
  console.log("Magical Number");
} else {
  console.log("not a magical number");
}
