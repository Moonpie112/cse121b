// console.log("--For Loops--")

// // for (initialExpression; condition; incrementExpression)
// //      statement

// for (let i = 0; i < 5; i++) {
//     console.log('Hello World');
// }

// for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }

// console.log("---")

// for (let step = 0; step < 5; step++) {
//     console.log("Walking east one step");
// }

// console.log("")

// const names = ['Ed', 'John', 'Maria', 'Burrito', 'Harry', "Potter",];

// for (namie of names){
//     console.log('Hi ' + namie + ', how are you today?');
// }
// // will loop through each name

// console.log("")

// for (namie of names){
//     console.log(namie);
//     if(namie === 'Maria'){
//         console.log('Maria is in my list!')
//     }
// } 

// // right now, this loop will go all the way through, print Maria and then print "Maria is in my list!" It will not stop. If we want it to stop, we need to break

// for (namie of names){
//     console.log(namie);
//     if(namie === 'Maria'){
//         console.log('Maria is in my list!')
//         break;
//     }
// } 

// // console.log("")
// // console.log("--While Loops--")

// //  let loading = 0;
// //  while(loading < 100){
// //      console.log('Website it still loading');
// //  }

// //// loading will always be less than 100. So this will make the code go crazy

// // let loading = 0;
// // while(loading < 100){
// //     console.log('Website it still loading');

// //     loading++;
// // }

// console.log("")
// console.log("--Do...while")

// // do
// //     statement
// // while (condition);

// //// every time it loops, it checks statement to see if it's true. If it is, then it does condition. 

// //// you can add multiple statements with {}

// let i = 0;

// do {
//     i++;
//     console.log(i);
// } while (i < 5);

// console.log("")
// console.log("")
// console.log("")
// console.log("--Practice activity--")

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log('For Loop')

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

console.log('While Loop')
let i = 0
while (i <studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}