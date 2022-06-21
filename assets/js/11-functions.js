console.log("-----functions.js-----")

// 1.
function greeting() {
    console.log("Hello World");
}

greeting();

// 2.
function countingCharacters(str) {
    if (str.length < 10) {
        console.log(str.length);
    } else {
        console.log("String is too long: " + str);
    }
}

countingCharacters("Hello!");
countingCharacters("Good morning my friend!");

// 3.
function difference(dNum1, dNum2) {
    if (isNaN(dNum1) || isNaN(dNum2)) {
        return "Input(s) must be a number!";
    }

    return Math.abs(dNum1 - dNum2);
}

console.log(difference("hello", 3)); // "Input(s) must be a number!"
console.log(difference(3, 5)); // 2
console.log(difference(5, 1)); // 4

// 4.
const advancedGreeting = function(hour) {
    if (hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour <= 18) {
        return "Good afternoon";
    } else if (hour > 18 && hour <= 24) {
        return "Good night";
    } else {
        return "Invalid hour input";
    }
}

console.log(advancedGreeting(11));
console.log(advancedGreeting(14));
console.log(advancedGreeting(20));
console.log(advancedGreeting(25));

//** ask - why use function expression syntax vs. regular function syntax?

// 5.
// Can we access variables created inside the scope of a function outside of that function?
    // no
// Can a function access variables created in a parent scope?
    // yes