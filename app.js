// -------------Chapter  1  (Variables let, const, var)------------------

console.log(2 ,"hello World 2", 3443,true)
var a =27;

console.log("This is var, const,let videos")

var cc = "rk";
var ccc = true;
var cccc = undefined;
var c = -1;

{
    var c = 6
    console.log(c)
}
console.log(c);

var c = 10;
console.log(c);

// if we have let then what will be

let b = "Saurabh";
console.log(b);
let ravi5=4;
//let 5ravi=4;
let _r= 3;


let dd=undefined;
console.log(dd);

let d = "Ravi";
//let d = "Ravi"; not allow this 
{
    let d = "Ajeet";
    console.log(d);

}
d = "Anand"
console.log(d);

const dev ="Ravi"; // if we don't want to change anytime
//dev ="Rahul"; //cont update the value of const variable
//let dev = "Anand"   //it will give the error because the rule 
console.log(dev);

//can't create undefined 
//const ddddd;
const devd = undefined;
//devd = "Kumar"
//console.log(devd);


let rr;
rr="Ravik"
console.log(rr);



// -------------Primitive data types nn ss bb u ----------

let aa = null;
let bb = 345;
let ddd = true;
let e = "Ravi";
let f = BigInt("546") + BigInt(4);
let g = Symbol("Hi guys this is javascript tutorial.");
let h = undefined;
let  i;

console.log(aa, bb, ddd, e, f, g, h, i)
console.log(typeof f)


// --------Non-Primitives in Js (object) --------
const person = [{fname:"John", lname:"Doe", age:25},{fname:"John", lname:"Doe", age:25}]; // Array of object
let person1 = {fname:"John", lname:"Doe", age:25} // single object
let person2 = ["John","Doe",25] // Array 

let ravi = {
    "rk" : true,
    sk : 12,
    ak : false,
    ss : undefined
}
let rk = 0;
 console.log(ravi["rk"], ravi["sk"]);
 document.write("<br>")

    let arrays=[
      ["ravi","joe"],
      ["anand","joe"],
      ["ashish","joe"],
      ["rahul","joe"]
    ];    //multidimensional Array
    document.write(arrays[3][0]);


 
// Practice
//Chapter 1 - Q 1

console.log(a + b);

//Chapter 1 - Q 2
document.write(typeof (a + b)); // this concenetated so it will come string data types
document.write(typeof (a + bb));

//Chapter 1 - Q 3
const rkRavi = {
    name:"Ravi",
    section : 1,
    isPrinciple : false
}
//rkRavi = "Harry" con't change in other data types

//Chapter 1 - Q 4
//we can object in object but can't change vlaue of const 

rkRavi["friend"]="Saurbh";
rkRavi["name"]="Ajeet";

// rkRavi = {
//     name:"Ajeet",
//     section : 1,
//     isPrinciple : false
// }
console.log(rkRavi);

// for single print object
console.log(rkRavi.name); //or
console.log(rkRavi["name"]);

//Chapter 1 - Q 5

const dict ={
    cow : "This is the cow",
    work : "Work is workship"
}
console.log(dict['cow']);
document.write(dict.work);

// Chapter  2   Operators (Expression And Condition )

77;
"Ravi Kumar";
// ---------------Arthemetic operators-------------

let sum = 10;
let sum1 = 4;
console.log("sum + sum1 =", sum + sum1);
console.log("sum - sum1 =", sum - sum1);
console.log("sum / sum1 =", sum / sum1);
console.log("sum * sum1 =", sum * sum1);
console.log("sum % sum1 =", sum % sum1);
console.log("sum ** sum1 =", sum ** sum1);
console.log("sum++ =", sum++, "The value of sum after increment", sum);
console.log("++sum =", ++sum, "The value of sum -- ",sum, sum);
console.log("sum-- =", sum--,sum);
console.log("--sum =", --sum,sum);


//--------------Assignment operators--------------

sum = 4;
sum1 = 20;

sum = sum+=sum1;
console.log(sum);

sum = sum-=sum1;   
console.log(sum);

sum = sum*=sum1;
console.log(sum);

sum = sum/=sum1;    
console.log(sum);

sum = sum**=sum1;
console.log(sum);

sum = sum%=sum1;
console.log(sum);


// ---------------Comparison Operators-------------

let comp1 = 6;
let comp2 = "dsfn";
console.log("comp1 == comp2 is" ,comp1 == comp2);
console.log("comp1 == comp2 is" ,comp1 != comp2);
console.log("comp1 == comp2 is" ,comp1 === comp2);
console.log("comp1 == comp2 is" ,comp1 !== comp2);


// --------------Logical Operators--------------

let x = 5;
let y = 6;
let yy = "4234";
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false, !true);

//------------Other function to convert data type-------------

// let p = prompt("Hey Anand how u");
// let pp =alert("Are u sure want to go");
// let ppp =confirm("Are u sure want to go");
// console.log(p,pp,ppp, typeof p, typeof pp, typeof ppp);

// To convert sting to number
yy = parseInt(yy);       //doubt
console.log(yy, typeof yy);

// To convert number to sting
let ss=x.toString(2);           //it will be return in binary number
console.log(ss,typeof ss);

//-----------------Condition Expression --------------

//if else

// if(x>0){
//     alert("This is valid age");
//     console.log(x);
// } 
// else{
//     alert("This is an invalid age");
// }

//if else if else ....

// if(x=0){
//     alert("This is valid age");
//     console.log(x);
// } 
// else if (x=5){
//     alert("This is qual to 5");
// }
// else{
//     alert("invalid")
// }


// Switch Condition

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }


  let day =2;
  switch ( day ) {
   //or
  //switch ( new Date().getDay() ) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    break
    default:
      day = "fdfl";
    }
    console.log(day);
    function my(){
        document.getElementById("demo").innerHTML=day;
    }

    // -------Ternary Operator---------

    let z = "Manoj";
    z="manoj" ? true:false;
    console.log(z,typeof z);

    let zz = 3864;
    let zzz=(zz > 0) ? true:false;
    console.log(zzz,typeof zzz);


    //---------Chapter 2--------
    
    // Q 1

    // let age = prompt("What is your age ?");
    // if(age > 10 && age <20){
    //     console.log("between");
    // }
    // else{
    //     console.log("Not between");
    // }

    // Q 2

    // let num = prompt("Divisible By");
    // if( num % 2 == 0 && num % 3 == 0 ){
    //     console.log("Divisible");
    // }
    // else{
    //     console.log(" Not Divisible");
    // }

    // Q 3

    // let age = prompt("What is your age ?")
    // age = (age >= 18) ? "You r able to drive":"You r not able to drive";
    // console.log(age);


    //------------Loops---------------

    //--------For loop

    // let n= prompt("Enter nuber");
    // for(let i=0; i<=n; i++){
    //     console.log(i);
    // }

    //--------for in loop

    const personn = [{fname:"John", lname:"Doe", age:25},
    {fname:"John", lname:"Doe", age:25}
    ]; // Array of object
    
    let text = "";
    for (let x in personn) {
      document.write(personn[x]);   //doubt
    }
    console.log(personn);

    // person.forEach(function){   //doubt
    //   console.log(data.fname);
    //   data["lname"="Kumar"]
    // }
    

//     const numbers = [45, 4, 9, 16, 25];

// let txt = "";

// numbers.forEach(myFunction())

// function myFunction() {
//   console.log(fname);
//   data["lname"]="Kumar";
// }


// --------for of loop


const cars = ["BMW", "Volvo", "Mini"];

let text1 = "jjg";
for (let x of cars) {
  text1 = text1 + x ; 
  console.log()
  text1 +=x;
  // text1 = text1 + cars[x] ;
  console.log(text1 )
}


//------while loop

let ii =4;
while (ii < 10) {
  text += "The number is " + ii;
  ii++;
  console.log(ii);
}

//------while loop

let iii =4;
do{

  console.log(iii)
  iii++
}
while(iii<10);