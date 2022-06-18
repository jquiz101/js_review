console.log("-----loops.js-----")

// 1.
for (let i=0; i <= 100; i++) {
    // console.log(i);
}

// 2.
for (let i=0; i <= 100; i++) {
    // console.log(i++);
}

// 3.
for (let i=100; i >=0; i--) {
    // console.log(i);
}

// 4.
for (let i=0; i <= 50; i++) {
    if (i % 5 === 0 && i % 2 !== 0) {
        // console.log(i);
    }
}

// 5.
let total = 0;

for (let i=1; i <= 10; i++) {
    total += 3;
}

// console.log(`total: ${total}`);


// 6.
let total2 = 0;
let count2 = 1;

while (count2 <= 10) {
    total2 +=3;
    count2++;
}

// console.log(`total2: ${total2}`);


// 7.
// continue - skips the rest of the lines of code in the loop group
//   and moves on to the next iteration of the loops
// break - exits out of the loop completely


// 8.
for (let i=1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {    
        console.log(i);
    }
}


// 9.
// do...while() - guaranteed to execute at least one time
// while() - not guaranteed to execute
// for() - the counter and incrementing it are part of the loop structure

