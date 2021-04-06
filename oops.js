// that oops is concept from javascript
// Object, classes, encapsulation and Inheritance
// encapsulation : hiding the properties from the object which is created
// Inheritance : parent and child class relationships

// object
// In Javscript everything is an object
var a = 2; // object

function add(a, b) {
  return a + b;
} // object

// object is an unique entity which contains property and methods

//Object literal
// Defining an Object
let person = {
  first_name: "Sobyalal",
  last_name: "Baby",

  getFunction: function () {
    return `${this.first_name} ${this.last_name}`;
  },

  phoneNumber: {
    mobile: "12345677843",
    landline: "122123123",
  },
};

console.log(person.getFunction());
console.log(person.phoneNumber.landline);

// Using an Object Constructor

function personusingCons(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  console.log(`${this.first_name}....${this.last_name}`);
}

// constructor is a first executable function when object is instantiated

// create 2 persons

let person1 = new personusingCons("Sobyalal", "Baby"); // creating an new instance from object person
let person2 = new personusingCons("Chipui", "Kasar");

// Object.create() method

const coder = {
  isStudying: false,
  introduction: function () {
    console.log(`My name is ${this.name} ${this.isStudying}`);
  },
}; // object

const coder1 = Object.create(coder);
coder1.name = "Thangam";
coder1.isStudying = true;
coder1.introduction();

// Classes
// classes are exact blueprint of object
// class can have many objects because class is just a template while object are instances
// gold smith example
// there are no classes in javascript even if we define a class it will be an object internally
// Javascript is a prototype based object oriented programming language
// it is defining behaviors using constructor functions and then reuse that prototype

// ES2015 until that there was no keyword called class
// es6 they introduced traditional way of defining objects
// class keyword

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getDetails() {
    return `${this.name}, ${this.maker}, ${this.engine}`;
  }
}

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("karizma", "Honda", "998cc");

console.log(bike1.name);
console.log(bike2.name);

// es2015 method

function VehicleOldWay(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}

VehicleOldWay.prototype.getDetails = function () {
  return `${this.name}, ${this.maker}, ${this.engine}`;
};

let bike3 = new VehicleOldWay("Hayabusa", "Suzuki", "1340cc");
let bike4 = new VehicleOldWay("karizma", "Honda", "998cc");
console.log(bike3.name);
console.log(bike4.name);
console.log(bike3.getDetails());

// encapsulation

// process of wrapping or hiding property or function within a single class

class persont {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  add_address(address) {
    this.address = address;
  }
  getDetails() {
    console.log(`${this.name} + ${this.add}`);
  }
}

let personv = new persont("Vignesh", 21);
personv.add_address("Delhi");
console.log(personv.address);

//  Inheritance
// es6 features
