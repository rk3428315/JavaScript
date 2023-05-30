//Q 1

let arrrr = [1,4,6,8,54];
// let a1 = prompt("Enter a number ");
// a1= Number.parseInt(a1);
// arrrr.push(a1);
// console.log(arrrr);

//Q 2

// do{
//     a1 = prompt("Enter a number ");
//     a1= Number.parseInt(a1);
//     arrrr.push(a1);

// }while(a1 != 0);
// console.log(arrrr);

//Q 3

let filterarray = arrrr.filter((a)=>{
    return a % 4 == 0;
});
console.log(filterarray);

//Q 4

// To get the square of number 
let filterarray1 = arrrr.map((x)=>{
   // return x * x;                     // to get square of number
    return Math.sqrt(x)
});
let squareRoot = Math.sqrt(x); 
//console.log(filterarray1);


//Q 5

//to get value of all number after added
let filterarray2 = arrrr.reduce((z, y)=>{
    return z + y;
});
console.log(filterarray2);

