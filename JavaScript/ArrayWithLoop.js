let num22 = [2, 54, 386, 846];
// for(let i = 0; i < num22.length; i++){
//     console.log(num22[i]);
// }

num22.forEach((Element)=>{
    console.log(Element * Element);
});

//convert string to array
let namee = "Ravi";
let array= Array.from(namee);
console.log(array);

//for array indexing
for ( aaa in num22){
    console.log(aaa);
}