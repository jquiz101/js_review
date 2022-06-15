console.log("-----strings.js-----")

// 1.
let verb = "run",
    noun = "dog",
    adjective = "loyal",
    color = "brown",
    name1 = "Rover"

// 2.
let madlib = "temp";
madlib = "My " +  color + " " + noun + " is named " + name1 + ".\r\nHe likes to " 
    + verb + " and is the most " + adjective + " being you'll ever find.";

console.log(madlib);

// 3.
let madlibLiteral = `My ${color} ${noun} is named ${name1}.
He likes to ${verb} and is the most ${adjective} being you'll ever find.`

console.log(madlibLiteral);

// 4.
// Convert a string to a number so we can do mathematical calculations on it.
// parseFloat() is one way to do so

let num1 = "99";
let num2 = "44";

console.log(num1 + num2);

console.log(parseFloat(num1) + parseFloat(num2));