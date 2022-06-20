console.log("-----variables.js-----")

// 1.
let varLet = "varByLet"
const varConst = "varByConst"
var varVar = "varByVar"

// 2.
console.log(`let: ${varLet}`)
console.log(`const: ${varConst}`)
console.log(`var: ${varVar}`)

// 3.
varLet = "changedByLet"
varVar = "changedByVar"

console.log(`let: ${varLet}`)
console.log(`var: ${varVar}`)

// 4.
varConst = "changedByConst"

console.log(`const: ${varConst}`)

// A: an error is thrown -- Uncaught TypeError: Assignment to constant variable.

// 5.
// A: Use const to assign values that you know will never or should not change

// 6.
// Don't use var to declare - because it doesn't have block scope
// if statements - var declared in here is not stuck inside
    // - can affect var declared outside
	// - functions do scoping though, even if you use 'var'
// 'var' declarations sometimes don't show/suppresses errors; 'let' gives you better error messages
