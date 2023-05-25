// Functions

// if u want to invoked automatically then use () at end of function
(function normal(){
    let a = 10;
    let b = 20;
    console.log("Average of a and b " + (a+b)/2);
})();

// (function (){
//     let a = 10;
//     let b = 20;
//     console.log("Average of a and b " + (a+b)/2);
// })();


function onePluse(a, b){
    a = 25;
    b = 9;
    return Math.round(a/b); //it will provide whole number without renderin decimal number.
}
console.log(onePluse());

// we can create function like this it is morden 

let hello =() =>{
    console.log("Hi Anand where u in the javascript");
    return "hi";
}
hello();


