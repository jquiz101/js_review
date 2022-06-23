console.log("-----arrays.js-----")

// 1.
let values = [1, 2, 3]; // square brackets
let values2 = Array.of(1, 2, 3);

// 2.
// can use Array.isArray(values) to see if it returns true

// 3.
// typeof an array = object

// 4.
// index in an array is the reference/pointer to a specific element in an array
// arrays are zero-based

// 5.
// push() - add to end

// pop() - takes last element off array and store in variable

const carMakes = ["Honda", "Toyota", "Mazda"];

carMakes.push("Mercedes");
carMakes.unshift("BMW");

console.log(carMakes);
console.log(carMakes[2]);

// shift() - moves entire array to the left and removes first item

// unshift() - adds element to beginning of array

// 6.

// slice() - get new values from an array
const newCarMakes = carMakes.slice(0, 3);
console.log(newCarMakes);

// 7.
const ericInfo = ["Eric", "Senior Instructor", "Florida"];

// splice() - for deleting
// ericInfo.shift();
ericInfo.splice(0, 1);
console.log(ericInfo);

ericInfo[1] = "South Carolina";
console.log(ericInfo);

ericInfo.push("Schwartz");
console.log(ericInfo);

// 8.
const fruits1 = ["apple", "pear", "strawberry", "grape"];
console.log(fruits1[0]);

const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
console.log(fruits2[2][1]);

const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];
console.log(fruits3[1][1][1][0]);

// 9.
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]

// indexOf()
// filter()
// find()
// forEach()

for (let i = 0; i < studentsArray.length; i++) {
    console.log(studentsArray[i]);
}

// 10.
studentsArray.forEach(function(item) {
    console.log(studentsArray.indexOf(item) + ": " + item);
});

// 11.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squared = numbersArray.map(x => x*x);
console.log(squared);

// 12.
let arraySum = 0;
squared.forEach(function(item) {
    arraySum += item;
})
console.log(arraySum);

// 13.
const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];

const lsIndex = starWarsCharactersArray.indexOf("Luke Skywalker");

if (lsIndex > -1) {
    console.log(lsIndex);
}







