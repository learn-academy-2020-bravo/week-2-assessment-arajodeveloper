// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


//create a function that takes a num as an argument
//decide if the number is evenly devisivible by three or not.

const divisibleBy3 = (num) => {
  if(Math.abs(num) % 3 == 0) {
    return `${num} is divisibly by three`
  }
  else {
    return `${num} is not divisibly by three`
  }
}

console.log(divisibleBy3(num1));
console.log(divisibleBy3(num2));
console.log(divisibleBy3(num3));


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//create a function that takes in array
//returns array with every word capitalized

const allCap = (array) => {
  return array.map(value => value[0].toUpperCase() + value.slice(1))
}
console.log(allCap(randomNouns));



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//create a function that takes in the mixedDataArray
//return only num using a filter and sorted them from least to greatest

const sortedNum = (array) => {
  return array.filter(value => typeof(value) === "number").sort(function(a,b) {return a-b})
}
console.log(sortedNum(mixedDataArray));



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const countFirstVowel = (str) => {
  var vowels = ["a", "e", "i", "o", "u"]
  // var strArr = str.split("")
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])){
      return i
    }
  }

}
console.log(countFirstVowel(vowelTester1));
console.log(countFirstVowel(vowelTester2));




// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//creates a function that takes three arguments - num, math operation, num
//it performs the actual math operation in the middle
//if the input tries to divide by 0, return: can't divide by 0

const calculator = (num1, operator, num2 ) => {
  if(operator === "*") {
    return num1 * num2
  }
  else if(operator === "/"){
    if (num2 == 0){
      return "Can't divide by 0"
    }
    return num1 / num2
  }
  else if(operator === "+"){
    return num1 + num2
  }
  else if(operator === "-") {
    return num1 - num2
  }
  else {
    return "error"
  }
}


// // Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// // Expected output: 27
//
console.log(calculator(16, "+", 3))
// // Expected output: 19
//
console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
