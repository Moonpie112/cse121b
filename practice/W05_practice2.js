import U, {printName as printUserName, printAge} from './W05_practice.js'

const user = new U('Bob', 11)
console.log(user)
printUserName(user)
printAge(user)

console.log("")
console.log("")
console.log("--Fetch--")
// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// const results = fetch(url);
// doStuff(results);

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);
