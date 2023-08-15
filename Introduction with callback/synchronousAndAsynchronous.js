// Synchronous -- In this it will excute all code one by one till the end of previous code not go for the next line code

let a = prompt("Please enter the name.");
let b = prompt("Please enter the age.");
console.log(a, b);

// Asynchronous -- In this it will excute all code one whose execution is less executed first and the one after
// whose excution is more then excute later.

// here start and end is run first and setTimeout run after the 5 second

console.log("Start");    
setTimeout(function(){
    console.log("This is Asynchronous.");     
}, 5000);
console.log("end");       
