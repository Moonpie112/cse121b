/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    // grabs the numbers from the HTML form input, but they come in as strings
    const addNumberString1 = document.querySelector('#add1').value
    const addNumberString2 = document.querySelector('#add2').value

    // change the strings to numbers
    const addNumber1 = parseInt(addNumberString1)
    const addNumber2 = parseInt(addNumberString2)

    // add them together
    const sum = Add(addNumber1, addNumber2)
    // puts sum into box for user to see result
    document.querySelector('#sum').value = sum
}

// when the button is clicked, it begins the equation
document.querySelector('#addNumbers').addEventListener('click', addNumbers)




/* Function Expression - S U B T R A C T   N U M B E R S */
function subtract(number1, number2){
    return number1 - number2;
};

function subtractNumbers () {
    // grabs the numbers from HTML form input, but they come in as strings
    const subtractNumbersString1 = document.querySelector('#subtract1').value
    const subtractNumbersString2 = document.querySelector('#subtract2').value

    const subtractNumbers1 =parseInt(subtractNumbersString1)
    const subtractNumbers2 =parseInt(subtractNumbersString2)

    const difference = subtract(subtractNumbers1, subtractNumbers2)
    document.querySelector('#difference').value = difference
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)




/* Arrow Function - M U L T I P L Y   N U M B E R S */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    // grabs the numbers from the HTML form input, but they come in as strings
    const multiplyNumberString1 = document.querySelector('#factor1').value
    const multiplyNumberString2 = document.querySelector('#factor2').value

    // change the strings to numbers
    const multiplyNumber1 = parseInt(multiplyNumberString1)
    const multiplyNumber2 = parseInt(multiplyNumberString2)

    // add them together
    const product = multiply(multiplyNumber1, multiplyNumber2)
    // puts sum into box for user to see result
    document.querySelector('#product').value = product
}

// when the button is clicked, it begins the equation
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)



/* Open Function Use - D I V I D E   N U M B E R S */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    // grabs the numbers from the HTML form input, but they come in as strings
    const divideNumberString1 = document.querySelector('#dividend').value
    const divideNumberString2 = document.querySelector('#divisor').value

    // change the strings to numbers
    const divideNumber1 = parseInt(divideNumberString1)
    const divideNumber2 = parseInt(divideNumberString2)

    // add them together
    const quotient = divide(divideNumber1, divideNumber2)
    // puts sum into box for user to see result
    document.querySelector('#quotient').value = quotient
}

// when the button is clicked, it begins the equation
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)




/* Decision Structure */


/* A R R A Y    M E T H O D S - Functional Programming */
/* Output Source Array */

// creates array
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// attaches numbersArray to HTML element with ID of "array"
const sourceArray = document.getElementById('array');


/* Output Odds Only Array */

// variable to hold odd numbers in numbersArray
const oddArray = numbersArray.filter(isOdd)
// function to find odd numbers in numbersArray
function isOdd(value) {
    return value % 2 !== 0;
}
// assigns the retult to the HTML element with ID off "odds"
const oddsElement = document.getElementById('odds');


/* Output Evens Only Array */

// variable to hold even numbers in numbersArray
const evenArray = numbersArray.filter(isEven)
// function to find even numbers in numbersArray
function isEven(value) {
    return value % 2 === 0;
}
// assigns the retult to the HTML element with ID off "evens"
const evenElement = document.getElementById('evens');


/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);

const sumElement = document.getElementById('sumOfArray');

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);

const multipliedElement = document.getElementById('multiplied');


/* Output Sum of Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);

let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);

const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');