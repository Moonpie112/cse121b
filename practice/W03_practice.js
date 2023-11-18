// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 19;

if (hour >= 6 && hour < 12)
    console.log("Good morning!"); 
else if (hour >= 12 && hour < 18)
    console.log("Good afternoon!");
else
    console.log("Good evening!")

//Branching

// I have to wake up at different times differetn days of the week

// Mon - 7am
// Tue-Thu - 4am
// Fri - 9am
// Sat-Sun - 8am

let day = "Thursday"

switch(day) {
    case 'Holiday':
        console.log('7am');
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log('4am');
        break;
    case 'Friday':
        console.log('9am');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('8am');
        break;
    default:
        console.log('7am')
}
console.log('Bye')

let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(87);
console.log('------------------------------------------------------------------------------------')
console.log('F U N C T I O N S')

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Paul', 'Smith');

console.log('--Function Expression--')
var addNumbers = function(a, b) {
    var sum = a + b;
    return sum;
};
var result = addNumbers(3,4);
console.log(result)

console.log('--Arrow Functions--')

function sum(a, b) {
    return a + b
}

let sum2 = (a, b) =>  a + b


function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0

console.log(' ')
console.log('A R R A Y S   I N   F U N C T I O N S')
console.log('--Array.split()--')

const numbers = [1, -1, 2, 4];
// let's say we want all positive numbers
const filtered = numbers.filter(v => v >= 0);

console.log(filtered);

console.log('--Array.map()--')
// using the const numbers and const filtered in the last section

const items = filtered.map(n => ({ value: n}));

console.log(items);

console.log('--Array.reduce()--')
const numbers1 = [1, -1, 2, 3];

let sum1 = 0;
for (let n of numbers1)
    sum1 += n;

console.log(sum1);

// a = 0, 
const sum5 = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum5)