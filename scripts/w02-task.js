/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Kayla";
let currentYear = 2024;
let profilePicture = "image/placeholder.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img[src="images/placeholder.png"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullName}</strong>";
yearElement.textContent = currentYear;
imageElement.setAttribute("img", profilePicture);

imageElement.setAttribute("alt", "Profile image of ${profilePicture}");


/* Step 5 - Array */

const favoriteFoods = ["Pho", "Strawberries", "Sandwhiches", "Sushi"];





