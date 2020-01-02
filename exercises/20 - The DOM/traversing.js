//Me playing..

const getDiv = document.querySelector('#list');
const myList = document.createElement('ul');
getDiv.appendChild(myList);
const a1 = document.createElement('li');
const a2 = document.createElement('li');
const a3 = document.createElement('li');
const a4 = document.createElement('li');
myList.appendChild(a1).innerText = 'one';
myList.appendChild(a2).innerText = 'two';
myList.appendChild(a3).innerText = 'three';
myList.appendChild(a4).innerText = 'four🍕';
//myList.insertAdjacentElement('afterbegin', a1).innerText = 'oooh!';
//myList.appendChild(a1).innerText = 'ooooh!';