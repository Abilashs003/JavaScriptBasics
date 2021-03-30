// declare an student array
// It is an multi dimensional array
// there will be a single student array
// inside that student array you will get list of students array
// [["name of a student", "class",[[maths,72], [science,86], [environment,65]],
// ["name of a student", "class",[[maths,72], [science,86], [environment,65]]]

// declare for 5 students then
// try pop function for last element
// try push also
// unshift
// shift

studentArray = [
  [
    "David",
    "10th",
    [
      ["English", 70],
      ["Hindi", 75],
      ["Kannada", 82],
    ],
  ],
  [
    "Vinoth",
    "10th",
    [
      ["English", 77],
      ["Hindi", 85],
      ["Kannada", 72],
    ],
  ],
  [
    "Divya",
    "10th",
    [
      ["English", 90],
      ["Hindi", 75],
      ["Kannada", 86],
    ],
  ],
  [
    "Ishitha",
    "10th",
    [
      ["English", 76],
      ["Hindi", 97],
      ["Kannada", 79],
    ],
  ],
  [
    "Thomas",
    "10th",
    [
      ["English", 70],
      ["Hindi", 69],
      ["Kannada", 88],
    ],
  ],
];

var studentName = [];

for (let index = 0; index < studentArray.length; index++) {
  studentName.push(studentArray[index].shift());
}

console.log(studentName);

for (let index = 0; index < studentArray.length; index++) {
  studentArray[index].unshift(studentName[index]);
}
console.log(studentArray);

//remove the last subject of last student

studentArray[studentArray.length - 1][2].pop();

// remove the last studen
studentArray.pop();

// add a student using push functionality
studentArray.push([
  "vignesh",
  "6th",
  [
    ["English", 70],
    ["Telugu", 69],
    ["Tamil", 88],
  ],
]);

studentArray.shift();

studentArray.unshift([
  "Thomas",
  "10th",
  [
    ["English", 70],
    ["Telugu", 69],
    ["Tamil", 88],
  ],
]);

console.log(studentArray);
