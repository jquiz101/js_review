console.log("-----objects.js-----")

// 1.
let person = {
    name: "John",
    age: 25,
    favoriteColor: "blue",
    // 2. 
    sayHello: function() {
        return `Hello, My name is ${this.name}. I am  ${this.age} years old and my favorite color is ${this.favoriteColor}`;
    }
}
console.log(person.sayHello());
console.log(`Hello, My name is ${person.name}. I am  ${person.age} years old and my favorite color is ${person.favoriteColor}.`);

// 3.
let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrade: function() {
        return this.grades.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          ) / this.grades.length;
    },
    // 4.
    printDetails: function() {
        return `Hello, My name is ${this.name} and I am a student. I am ${this.age} years old and my major is ${this.major}. My current average grade is ${this.averageGrade()}.`;
    }
}

console.log(studentBob.averageGrade());
console.log(studentBob.printDetails());

// 5.
const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

for (let i=0; i < charactersArray.length; i++) {
    console.log(charactersArray[i]["name"].toUpperCase());
}

// 6.
const filteredCharactersArray = charactersArray.filter(
    x => x.mass > 80
)
console.log(filteredCharactersArray);

// 7.
const characterNames = charactersArray.map(
    x => x.name
)
console.log(characterNames);

// 8.
const hasBlueEyes = charactersArray.some(
    x => x.eye_color === "blue"
)
if (hasBlueEyes) {
    console.log("Some characters have blue eyes")
} else {
    console.log("No characters have blue eyes")
}

// 9.
const isAllMale = charactersArray.every(
    x => x.gender === "male"
)
if (isAllMale) {
    console.log("All the characters are male")
} else {
    console.log("Not all the characters are male")
}

// 10.
const totalMass = charactersArray.reduce(function (acc, obj) { return acc + +obj.mass; }, 0);
console.log(totalMass);

// 11.
function tagFavorite(myArray, favCharName) {
    myArray.forEach(elem => {
        elem.favoriteCharacter = false;
        if (elem.name === favCharName) {
            elem.favoriteCharacter = true;
        }
        console.log(elem)
    });
}

const theArray = [
    {name: "Superman"},
    {name: "Batman"},
    {name: "Wonder Woman"}
];

tagFavorite(theArray, "Batman");
tagFavorite(charactersArray, "Darth Vader");