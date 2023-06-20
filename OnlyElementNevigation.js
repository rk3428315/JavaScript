let a = document.body;

//if nodelist will be anything like comment, text or spaces whatever it will show first value (text, spaces, comment) 
console.log("This is print first node list ",a.firstChild);

//if nodelist will be anything like comment, text whatever it will show only is firstchild element
console.log("This is print only first element child ", a.firstElementChild);

//This is print only previous element child
console.log("This is print only previous element child ", a.previousElementSibling);

//This is print only next element child
console.log("This is print only next element child ", a.nextElementSibling);

//This is print only last element child
console.log("This is print only last element child ", a.lastElementChild);

// To change bg color of body
changeBodyRed=()=>{
    document.body.style.background ="red"
}
changeBodyRed()

