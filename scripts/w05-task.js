/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // creates the article element
        const articleElement = document.createElement('article');

        // creates the h3 element
        const h3Element = document.createElement('h3');
        // adds the temple's name to this element
        h3Element.textContent
        

        // creates the img element
        // const imgElement = document.createElement('img');
        // adds temple URL to imageUrl to the src

        // adds temple's location property to the alt attribute
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples = await response.json();
    console.log(temples);
    console.log(temples[0].area);
    console.log(temples[0].templeName);
}


getTemples()

/* reset Function */


/* sortBy Function */



// getTemples();

/* Event Listener */