//if we want to store more than value in single variable then we use array

let marks_class_12 =[81, 82, 63, 74,"srr",true, null]; //store different data type value
console.log(marks_class_12);
console.log(marks_class_12[4], marks_class_12[2]); //to print multiple value
console.log(marks_class_12[4][0]); //to print value charachter
console.log(marks_class_12[8]); //undefine because no value on index 8
marks_class_12[10] ="Ravi";     //Directly can add value with indexing and add new value 
console.log(marks_class_12[10]);
marks_class_12[0] = 91;            //update the value
console.log(marks_class_12[0], typeof marks_class_12);


//Array functions

let num = [1, 2, 3, 4];
{    
    console.log(num,typeof num);
    // let b = num.toString()  // To change in string
    // console.log(b,typeof b);

    console.log(num.join("*"), typeof num); //join string symbole between string
    console.log( num.pop()); //return popped or last element   
    

} 
//concat
let newArray = marks_class_12.concat(num, marks_class_12); //to concat 2 array in single array
console.log(newArray);

//sort
console.log(marks_class_12.sort()); //short by alphabatically squence like 1,2 and a,b,c 

let compare = (a,b)=>{
    return a-b;
} 
marks_class_12.sort(compare);
console.log(marks_class_12);

//reverse
console.log(marks_class_12.reverse());

//splice and slice   - to add new value in array and remove value in array

let numberof = [2,3,534,645,74,965,074]         
//console.log(numberof.splice(0,1,22, 58,683,4444));  //doubt

console.log(numberof.slice(2,5));   //contain only 2 to 5 index value and show

