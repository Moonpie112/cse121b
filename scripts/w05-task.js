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
        h3Element.textContent = temple.templeName

        // creates the img element
        const imgElement = document.createElement('img');
        // adds temple URL to imageUrl to the src
        imgElement.setAttribute("src", temple.imageUrl) 
        // adds temple's location property to the alt attribute
        imgElement.setAttribute("alt", temple.location)

        // appends the info to the webpage so we can see the changes made
        articleElement.appendChild(h3Element)
        articleElement.appendChild(imgElement)
        templesElement.appendChild(articleElement)
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples = await response.json();
    templeList.push(temples);
    displayTemples(temples);
}

/* reset Function */
const reset = () => {
    templesElement.textContent = ''; 
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    let filter = document.getElementbyID('sortBy');
    
    switch (filter) {
        case utah:
            displayTemples("temples");
            const filterUtah = templeList.filter(temple => {return temple.location.includes("Utah");
            });
            break;
        case notutah:
        displayTemples(temples);

            break;
        case older:
            displayTemples(temples);

            break;
        case all:
            displayTemples(temples);

            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});