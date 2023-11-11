let num1 = 9
let num2 = 6

let result = num1 + num2

console.log(`The addition of ${num1} + ${num2} = ${result}`);

console.log(`My name is 
Kayla Moon`)


let courseSubject = "Advanced Typography"
let courseNumber = "ART397"
let courseCredits = 3
let courseLength = "13 weeks"

let output = 
`Welcome to ${courseSubject} ${courseNumber}! 
Credits: ${courseCredits} 
Length: ${courseLength}`

console.log(output)


let temples = ["Rome", "Salt Lake", "Nauvoo"];

let listItems = "";

for (const temple of temples) {
    listItems += `<li>______________</li>`;
}

document.querySelector("ul") .innerHTML = listItems;