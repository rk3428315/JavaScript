//Array map method     --return array

//1
 let arr = [76, 57,497,456];

let a = arr.map((value,index)=>{
    //console.log(value,index);
    return value + 1;
 })
 console.log(a);


 //Array filter method      --return array

 let arr2 = [45, 57,78,9];
let a2 = arr2.filter((value)=>{
     //console.log(value)
    return value < 50;
 });
console.log(a2);

//Array Reduce method       --return value

let arr3 =  [1,2,4,5,1,3,];
let a3 = arr3.reduce((h1, h2)=>{
    //console.log(value)
   return h1 + h2;
});
console.log(a3);