/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kayla Moon",
    photo: "images/placeholder.png",
    favoriteFoods: [
        "Pizza",
        "Pho",
        "Sushi",
        "Chicken Pot Pie",
    ],
    hobbies: [
        "Reading",
        "Drawing",
        "Crafts",
        "Running",
        "Being an annoying older sister",
    ],
    placesLived: [
    ],

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push (
    {
        place: 'Buena Vista, VA',
        length: '5 years'
    },
    {
        place: 'Lexington, VA',
        length: '1 year'
    },
    {
        place: 'Danville, VA',
        length: '8 years'
    }
)

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */
document.getElementById('photo').alt = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let placesList = document.getElementById('places-lived');

for (let i = 0; i < myProfile.placesLived.length; i++) {
    let placeObj = myProfile.placesLived[i]

    let dtElement = document.createElement('dt');
    dtElement.textContent = placeObj.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = placeObj.length;

    let d1Element = document.createElement('d1');

    d1Element.appendChild(dtElement);
    d1Element.appendChild(ddElement);

    placesList.appendChild(d1Element);
};