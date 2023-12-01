// adds items to the element myList in the html file
let myList = document.getElementById('myList');

// Creating an array that we will later put into myList
let friends = ['John', 'Jane', 'Mary', 'Joe'];

// this is what puts the info from "friends" into the HTML file
for (let i = 0; i < friends.length; i++) { // iterates through the array. I starts off at 0, and as long as i is less than the total numbers of items in the array, it will continue to add one to itself. This reads through each item in the array individually before moving onto the next one
    let listItem = document.createElement('li'); // creates the item "listItem" which will create a list item in the HTML file
    listItem.textContent = friends[i]; //puts the info from the array in between the "<> (here) </>" of the <li> element
    myList.append(listItem); 
};

// other ways to do the same thing

for (friend of friends) {
    myList.innerHTML += '<li>' + friend + '</li>';
};

// and a third way

friends.forEach(friend => {
    let listItem = document.createElement('li');
    listItem.textContent = friend;
    myList.append(listItem);
});

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});