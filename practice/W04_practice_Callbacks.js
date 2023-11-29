function doSomething(value) {
    value()
}

doSomething(function(){
    console.log("Hello")
})


function log(value) {
    console.log(value)
}

function calculateSum(num1, num2, print) {
    const sum = num1 + num2
    
    print(sum)
}

calculateSum(10, 20, log)

console.log("--Practice Work--")

function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log('The result is: ' + result);
}

calculate(2, 3, displayResult)

console.log("")
console.log("")
console.log("--JSON--")

const supersquad = `
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
            "Million ton punch",
            "Damage resistance",
            "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Inter-dimensional travel"
            ]
        }
        ]
    }
`;

const squad = JSON.parse(supersquad)

console.log(squad)