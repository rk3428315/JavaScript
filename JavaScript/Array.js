//if we want to store more than value in single variable then we use array

const marks_class_12 =[81, 82, 63, 74,"srr",true, null]; //store different data type value
console.log(marks_class_12);
console.log(marks_class_12[4], marks_class_12[2]); //to print multiple value
console.log(marks_class_12[4][0]); //to print value charachter
console.log(marks_class_12[8]); //undefine because no value on index 8
marks_class_12[10] ="Ravi";     //Directly can add value with indexing and add new value 
console.log(marks_class_12[10]);
marks_class_12[0] = 91;            //update the value
console.log(marks_class_12[0], typeof marks_class_12);


//Array functions

{
    let num = [1, 2, 3, 4];
    console.log(num,typeof num);
    // let b = num.toString()  // To change in string
    // console.log(b,typeof b);

    console.log(num.join("*"), typeof num); //join string symbole between string
    console.log( num.pop()); //return popped or last element 

    
    

} 



