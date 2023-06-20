console.log(document.body.firstChild);           // If we want to access the first child element from parent element

console.log(document.body.lastChild);            // To access last element last child element from parent element

console.log(document.body.childNodes)            // To show all element and text in parent element

let array = Array.from(document.body.childNodes);   // If need to change nodelist into array
console.log(array[6]);

//Accessing parent element

console.log(document.body.firstChild);           // If we want to access the first child element from parent element
let a = document.body.firstChild;                
console.log(a.parentElement);
console.log(a.parentNode);
console.log(a.firstChild.nextSibling);



