// year 1976 ---> check whether this is leap year or not

// many ways

// year % 4 --> not (year % 100) --> leap year

// year %100 --> year % 400 ---> leap year // satisfied

var year = 2019;
// variable assignment and declaration

//if else if else loop

// arthimetic operation
// == vs === equality operator
if (year % 100 === 0) {
  if (year % 400 === 0) {
    console.log("leap year");
  }
} else if (year % 4 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

var leapYear =
  year % 100 === 0
    ? year % 400 === 0
      ? true
      : false
    : year % 4 === 0
    ? true
    : false;

// (condition) ? trueStatement : falseSteatement

// (year%100===0) ?        (year%400===0) ?true :false        :            (year% 4 ===0) ? true : false

//Logarithimic expression

if (leapYear) {
  console.log("Its a leap Year Logarithimic");
} else {
  console.log("Its not a leap yEAR");
}
