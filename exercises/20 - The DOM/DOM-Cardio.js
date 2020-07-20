// Make a div
const ccDiv = document.createElement("div");

// add a class of wrapper to it
ccDiv.classList.add(".wrapper");
// put it into the body
document.body.append(ccDiv);

// make an unordered list
const ccList = document.createElement("ul");
  //could have put this in string below

// add three list items with the words "one, two three" in them
const listStuff = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
    `;
ccList.innerHTML = listStuff;

// put that list into the above wrapper
ccDiv.appendChild(ccList);

// create an image
const ccImage = document.createElement("img");

// set the source to an image
ccImage.src = "https://picsum.photos/400/";

// set the width to 250
ccImage.width = 250;
// add a class of cute
ccImage.classList.add("cute");
// add an alt of Cute Puppy
ccImage.alt = "Cute Puppy";
// Append that image to the wrapper
ccDiv.append(ccImage);

// with HTML string, make a div, with two paragraphs inside of it
const sumDiv = `
    <div>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
    </div>`;
// put this div before the unordered list from above
ccList.insertAdjacentHTML("beforebegin", sumDiv);
// add a class to the second paragraph called warning
console.log(ccDiv.querySelectorAll("p")[1]);
ccDiv.querySelectorAll("p")[1].classList.add("warning");
// remove the first paragraph
ccDiv.querySelector("p").remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name = "1", age = "1", height = "1") {
    const dogAge = 7 * age;
  return `
    <div class="playerCard">
        <h2>Name: ${name} - Age: ${age}</h2>
        <p>${name} is ${height} inches tall and ${age} years old. In dog years this person would
        be ${dogAge} years old and a very tall dog!
        </p>
        </br>
        <button class="rmv">&times; Delete</button>
    </div>
    `;
}
  //const card = generatePlayerCard("Ko", 10, 40);
  //document.body.insertAdjacentHTML("beforeend", card);



// make a new div with a class of cards
const divCard = document.createElement("div");
divCard.classList.add("cards");
//document.body.append(divCard);

// Have that function make 4 cards
const card1 = generatePlayerCard("ku", 12, 50);
const card2 = generatePlayerCard("jo", 16, 20);
const card3 = generatePlayerCard("Ben", 22, 33);
const card4 = generatePlayerCard("ji", 36, 60);
let allCards = card1 + card2 + card3 + card4;
console.log(allCards);
// append those cards to the div
divCard.innerHTML = allCards;


// put the div into the DOM just before the wrapper element
ccDiv.insertAdjacentElement('beforebegin', divCard);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const getBtn = document.querySelectorAll('.rmv');
console.log(getBtn);

/*for (let btn = 0; btn < getBtn.length; btn++) {
    //function deleteCard() {getBtn[btn].parentNode.remove()}
    function deleteCard() {getBtn[btn].closest('.playerCard').remove()}
    getBtn[btn].addEventListener('click', deleteCard);
}
*/
// select all the buttons!
// make out delete function

// loop over them and attach a listener
function deleteCard(event) {
    const clicked = event.currentTarget;
    console.log(clicked);
    clicked.closest('.playerCard').remove();
}

getBtn.forEach(button => button.addEventListener('click', deleteCard));