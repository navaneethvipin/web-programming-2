function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

function arraySum(arr1, arr2) {
    let sum = 0;
    for (let num of arr1) {
        sum += num;
    }
    for (let num of arr2) {
        sum += num;
    }
    return sum;
}

function findLongestWord(str) {
    let words = str.split(' ');
    let longestWordLength = 0;
    for (let word of words) {
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
        }
    }
    return longestWordLength;
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function countVowels(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if ('aeiou'.includes(letter)) {
            count++;
        }
    }
    return count;
}

// Example function calls for the buttons
function testCalculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    const result = calculator(num1, num2, operator);
    console.log(`Result of ${num1} ${operator} ${num2} = ${result}`);
}

function testArraySum() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const result = arraySum(arr1, arr2);
    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);
    console.log(`Sum of arrays: ${result}`);
}

function testLongestWord() {
    const inputString = prompt("Enter a string to find the longest word:");
    if (inputString === null || inputString.trim() === "") {
        console.log("No input provided");
        return;
    }
    const result = findLongestWord(inputString);
    console.log(`Input string: "${inputString}"`);
    console.log(`Longest word length: ${result}`);
}

function testReverseString() {
    const inputString = prompt("Enter a string to reverse:");
    if (inputString === null || inputString.trim() === "") {
        console.log("No input provided");
        return;
    }
    const result = reverseString(inputString);
    console.log(`Original string: "${inputString}"`);
    console.log(`Reversed string: "${result}"`);
}

function testCountVowels() {
    const inputString = prompt("Enter a string to count vowels:");
    if (inputString === null || inputString.trim() === "") {
        console.log("No input provided");
        return;
    }
    const result = countVowels(inputString);
    console.log(`Input string: "${inputString}"`);
    console.log(`Number of vowels: ${result}`);
}

// Student object
const student = {
    studentName: "Tim",
    studentID: 6548,
    getStudentNameUppercase: function() {
        return this.studentName.toUpperCase();
    }
};

// Test functions for student object
function showStudentID() {
    console.log(`Student ID: ${student.studentID}`);
}

function getUppercaseName() {
    console.log(`Uppercase name: ${student.getStudentNameUppercase()}`);
}

// Dog object
const dog = {
    breed: "Shiba Inu",
    height: 37,
    favouritePlaces: ["park", "mall", "beach"],
    
    printHeight: function() {
        console.log(`Dog height: ${this.height}`);
    },
    
    printFavouritePlaces: function() {
        console.log(`Dog's favourite places: ${this.favouritePlaces.join(", ")}`);
    }
};

// Test functions for dog object
function showDogBreed() {
    console.log(`Dog breed: ${dog.breed}`);
}

function showDogHeight() {
    dog.printHeight();
}

function showDogFavPlaces() {
    dog.printFavouritePlaces();
}