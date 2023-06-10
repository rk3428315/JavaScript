// Q 1

//Print all odd number between 1 to 10

for (let i = 1; i <= 10; i++) {         // Loop for print number 1 to 10
    if (i % 2 != 0) {                   // condition to check modulous is not equal to 0 then print odd number
        console.log(i);
    }
    else {
        console.error();
    }

}

// Print even number between 1 to 10
evenNumber =()=>{
    for (let i = 0; i <= 10; i += 2){    // Loop for print even number 1 to 10 and it will add every time 2 value in i variable 
        console.log(i)                  
    }    
}
evenNumber();


// Q 2

// Calculate the sum of exiting array value (0, 5, 10, 20)


let array = [0, 5, 10, 20];                                  // Inislize a array
let sumOfArray = array[0] + array[1] + array[2] + array[3];  //sum of all array value
console.log(sumOfArray);

//------------OR----------------

let sumOfArray1 =0;                                 // Variable to stor sum of array                    
for(index = 0; index < array.length; index++){      // Loop to print all array one by one
    sumOfArray1 +=array[index];                     // Add value of array one by one with indexing
}
document.write(`Sum of array = ${sumOfArray1}, Average of array = ${sumOfArray1/array.length}`);

// Q 3

// Create a function that reverse all array

let array1 = [0, 5, 10, 20];                                    // Inislize a array
reverseArray = () => {                                          // Fuction for reverse array
    for (let index = array1.length; index >= 0; index--) {      // A loop to check if array length is greater than and equal to 0 then decresize print all value to existing array
        console.log(array1[index]);
    }
}
reverseArray();                                                 // To call reversArray function 


// Q 4

// Filter a negative value from array 

let array3 = [-1, 3, -5, 17, -50];                             // Inislize a array

for (index = 0; index <= array3.length; index++) {             // A loop to check if array length is greater than and equal to 0 then increaze print all value to existing array
    if (array3[index] < 0) {                                   // Condition to check if value of array is less than 0 then print all negative number
        console.log("Negative number = " + array3[index]);
    }
}

// Q 5

// Arrage the array value in ascending order

let array4 = [2, 68, 4587, 398, 0];                             // Inislize a array

ascedingOrder=()=>{
    

    for (var ind = 1; ind < array4.length; ind++) {                 // To print index value of array from 1 index  to length of array and increase one by one by indexing
        for (var x = 0; x < ind; x++) {                             // To print x index value of array from 0 index to length of array and  check if x value is less than array index value
    
            if(array4[x] > array4[ind]) {                           // if x index value is greater than array index value 
                var store = array4[ind];                            // store value of array index value in store variable
                array4[ind] = array4[x];                            // store x index value in array index value
                array4[x] = store;                                  // store x index value in store variable
            }
            console.log(array4 +"-------")
        }
    }
}
ascedingOrder();

descedingOrder=() =>{
    for(var indexx = 1; indexx < array4.length; indexx++){
        console.log(array4[indexx])
        for(var xx = 0; xx < indexx; xx++){
            console.log(array4[xx])
            // if(array4[xx] < array3[indexx]){
            //     var st = array4[indexx];
            //     array4[xx] = array4[indexx];
            //     array4[indexx] = st;
            // }
            // console.log(array4);
        } 
    }
}
descedingOrder();



