// people need to enter into an hospital
// if they have PatientID --> enter into the hospital ---> if loop

// if they have PatientID --> enter if they have id or else type dont enter into hospital'\

// if they have PatientID
// elseif you have employee ID
// else if you are a doctor
// else if you are surgeon
// else dont enter

var id = "patient";

if (id == "patient") {
  console.log("permitted");
} else if (id == "doctor" || id == "surgeon" || id == "employee") {
  console.log("permitted");
} else {
  console.log("not permitted");
}

// write above case both in else if and switch case

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

// find the sum of first 10 digits using loops 1+2+3+....+10 =
// while loop and for loop

// 1+2+3+4+5+6+7+8+9+10
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
j = 0;
sum = 0;
while (j >= numbers.length) {
  sum += numbers[j];
}
