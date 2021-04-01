// var studentName = "Sobyalal";
// var studentName = "Vignesh"; // wrong and bad practice

// ES6 feature
// JavaScript --> EcmaScript 6
// let and const

// let can be changed later stage
// const is used whenever data is not mutable --> not changing

const schoolName1 = "Preethi English School";

let studentName = "Sobyalal";
studentName = "Vignesh";

function getStudentName() {
  // local scope
  const schoolName = "PES";
  let studentName = "Thangam";
  console.log(studentName);
  console.log(schoolName1);
}

getStudentName();
console.log(studentName);

// add function
// function add(num1, num2) {
//   return num1 + num2;
// }

// arrow functions
const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

// console.log(add(1, 2));
// console.log(multiply(1, 2));

const arr = [1, 2, 56];

// Arrow functions
const greaterThanFifty = (num1) => (num1 > 50 ? true : false);

// for (let index = 0; index < arr.length; index++) {
//   if (greaterThanFifty(arr[index])) {
//     console.log(arr[index]);
//   }
// }

// map() , reduce() , filter()

var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

// i need the only the IDs of from these array
function getId(officer) {
  return officer.id;
}

for (let index = 0; index < officers.length; index++) {
  console.log(`ID of pilot ${index + 1} : ${getId(officers[index])}`);
}

// it will take an array or object as an input and iterate one by one element with a parameter

console.log(
  officers.map(function (officer) {
    console.log(`ID of pilot : ${officer.id}`);
  })
);

officers.map((officer) => {
  console.log(`ID of pilot : ${officer.id}`);
});

var numbes = [1, 2, 3];

numbes.map((num) => {
  console.log(`Output of ${num} : ${num * 10}`);
});

numbers = [42, 51, 62];
// output = 44 51 64
// you have to check if it is divisible by 2 if it is divisible by 2 then add 2 to it

// reduce functionality

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

// sum of all the pilot years
// normal way
// let and const

let totalYears = 0;

pilots.forEach((pilot) => {
  totalYears += pilot.years; // totalYears= totalYears+ pilot.years
});

console.log(`Normal way : ${totalYears}`);

// var a;
// console.log(a + 2);

// let totalYearsUsingReduce = pilots.reduce(function (lastValue, pilot) {
//   console.log(lastValue);
//   return lastValue + pilot.years;
//   // return accumulator + pilot.years; // 14+ 14 =28 1st iteration
//   //28+30 =46 2nd iteration
//   //46 + 16 =62 3rd iteration
//   // 60 + 22 = 82 4th iteration
// }, 0);

let totalYearsUsingReduce = pilots.reduce(
  (lastValue, pilot) => lastValue + pilot.years,
  0
);

console.log(`reduce way : ${totalYearsUsingReduce}`);

// .filter() functionality

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

// filter using common method
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

// filter using Arrow functions
var rebels2 = pilots.filter((pilot) => pilot.faction === "Rebels");

console.log(rebels);
console.log(rebels2);

// example

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var totalScoreJ = personnel
  .filter((person) => person.isForceUser)
  .map((scorePerson) => scorePerson.pilotingScore + scorePerson.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalScoreJ);
