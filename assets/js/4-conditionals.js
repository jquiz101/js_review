console.log("-----conditionals.js-----")

// 1.
let x = 20,
    y = 15;

// 2.
if (x > y) {
    console.log("Hello World");
} else {  // 3.
    console.log("Goodbye World");
}

// 4.
// falsy values examples:
// - false
// - 0
// - "" or '' (empty strings)
// - null
// - undefined
// - NaN


// 5.
let number1 = 8;
let number2 = "9";

if("0" === 0){
    console.log("condition 1 is true")
}else if(number1 > number2){
    console.log("condition 2 is true")
}else if(typeof number2 === "number"){
    console.log("condition 3 is true")
}else if(typeof number2 !== "number" && number1 > number2){
    console.log("condition 4 is true")
}else if("0" == 0){
    console.log("condition 5 is true")
}else{
    console.log("no condition was true")
}

// "condition 5 is true" - because all previous conditions aren't true
//   and the two equals symbols used here don't check for type equality,
//   so it evaluates to the zeroes being equal

// 6.
// == vs === - the latter checks for type equality
// === is best practice to use, so you're truly checking types and values

// 7.
let addButter = true;
let popcorn = "The popcorn is ready!";

if(addButter) {
    popcorn = "The popcorn is delicious!";
} else {
    popcorn =  "The popcorn is good but could use some butter :("
}
console.log( popcorn )

popcorn = ( addButter ? "The popcorn is delicious!" : "The popcorn is good but could use some butter :(");
console.log( popcorn )

// 8.
let soldOut = true;
let onSale = true

let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(message);

// "I did not get tickets" - because 'soldOut' needed to be false
//   AND onSale neeed to be true for the condition to be met,
//   but 'soldOut' was true

// 9.
if (!soldOut && onSale) {
    message = "I got tickets!";
} else {
    message = "I did not get tickets";
}

console.log(message);

