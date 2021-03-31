// obejcts are similar to arrays except that instead of index to access the data/element
// we will access data through properties

// object declaration and assignment

var dog = {
  name: "Huskey",
  legs: 4,
  tails: 1,
  enemies: ["strayDogs", "Medicine"],
};

// fetching the data using .notation

console.log(dog.name);

//fetching data from object using square brackets

// console.log(dog["eyes"]);

// updating Object Properties

dog.name = "pamorine";

dog["name"] = "vodafoneDog";

console.log(dog.name);

// adding new properties to object

dog.eyes = 2;
dog["eyes"] = 4;

//delete properties in the object

// delete dog.eyes;
delete dog["eyes"];

console.log(dog);

// built in function hasOwnProperty()

console.log(dog.hasOwnProperty("tailsasda"));

var ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: [{ types: ["CD", "DISK"] }],
    bronze: true,
    details: { firstName: "Daft", lastName: "Punk" },
  },
  {
    artist: "Subhakshmi Concert",
    title: "Classical ",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    platinum: true,
  },
  {
    artist: "Balasubramanyam",
    title: "Melody ",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    Gold: true,
  },
];

console.log(ourMusic[0].formats[0].types[1]);

//nested objects
var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};

console.log(ourStorage.cabinet["top drawer"].folder2);
