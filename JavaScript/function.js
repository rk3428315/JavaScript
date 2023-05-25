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


//Practice set of loop

//Q 1

let marks={
    ravi:20,
    ajeet:40,
    anand:50,
    prince:70
}

for(let i = 0; i< Object.keys(marks).length; i++){
    console.log("The marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]]); //doubt
}

//same thing with for in loop

for(let key in marks){
    console.log("The marks of "+ key + " are "+ marks[key]);
}

//Q 2

let number = 5 ;
//let y;        doubt  without delclare y is possible in while loop
// while(y != number){
//     y =prompt("Enter a number");
//     console.log("try again")
// }
// console.log("Right number");

//Q 3

let mean =(a, b, c, d)=>{
    return (a +b+c+d)/4;
}

console.log (mean(4, 5, 6, 7));





