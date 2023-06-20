//Console object methods

let anand = "Hi i am Anand.";
console.log(anand);                 // log()    - To print values in console.

console.error("This is an Error");  // error()  - To show error in console.

console.assert(5 < 2);              //assert    - method writes a message to the console if an expression evaluates to false( this is the part of error ).

//console.clear();                  //clear()   - To clear value in console

let obj = {a : 1, b : 2, c : 3};    //table()   - To decurate in table formate
let obje = [1,2,3,4,5,7,7,7,7];
console.table(obje);

console.warn("Hey this is warning.")    //warn()      - To show the warning in console

//console.log(alert("please conform"))  //alert()     - To show the alert on the dom

console.info("Hi this is info");        //info()      - To show the important things

console.time("time");                   //time()      - To start the time in program

console.timeEnd("time");                //timeEnd()   - To known time of taken in coding the particular example
console.time("function"); 
for(let i = 0; i <5; i++){
    console.log(i);
}
console.timeEnd("function"); 
