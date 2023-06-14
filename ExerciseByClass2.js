// Q 1
// Create a function that will recieved two arrays and will return any array with elements that are in the first array but not in the second Array.
var store = [];
// combineTwoArray = () => {
    let array = [1, 2, 5, 20, 40, 45, 100, 101];
    let array1 = [-10, 5, -5, 2, 4, 5, 6, 8, 12, 100, 101];

    for (i = 0; i < array.length; i++) {
        // console.log(array[i]);
        for (j = array[i]; j < array1.length; j++) {
            if(array[i]!= array1[j]){                
                 store.push(array[i]);  
                // console.log('number is'+array[i])

            
            }
            
            
        }
    }
// }
// combineTwoArray();
console.log("store"+store);


// combineTwoArray = () => {
//     let array  = [1, 2, 5, 20, 40, 45, 100, 101];
//     let array1 = [-10, 5, -5, 2, 4, 5, 6, 8, 12, 100, 101];

//     for (var ind = 1; ind < array.length; ind++) { 
//         console.log(array[ind])                // To print index value of array from 1 index  to length of array and increase one by one by indexing
//         for (var x = 0; x < ind; x++) {   
//             console.log(array[x])                         // To print x index value of array from 0 index to length of array and  check if x value is less than array index value

//             // if (array4[x] > array4[ind]) {                          // if x index value is greater than array index value 
//             //     var store = array4[ind];                            // store value of array index value in store variable
//             //     array4[ind] = array4[x];                            // store x index value in array index value
//             //     array4[x] = store;                                  // store x index value in store variable
//             // }
//             // console.log(array4);
//         }
//     }
   
//     // for (i = 0; i < arrary3.length; i++) {
//     //     console.log(arrary3[i]);
//     //     if (current == arrary3[i]) {
//     //         //found = false;
//     //     } else if (current != arrary3[i]) {
//     //         console.log(" " + current);
//     //         current = arrary3[i];
//     //     }
//     // }
// }
// combineTwoArray();

// Q 2
// Print the distance between the first 100 prime Number.



// Q 3
// Create function that will retrun the number of words in a text.

returnNumberOfText = (n) => {

    console.log(n.length);
    n = toString(n);
}
returnNumberOfText("dfkdj");



//Q 4
// Create a function tha will capitalize the first letter of each word in text.


capitalizeWord= ()=>{  

    var c;
let capitalizeArray =["hi", "anand", "how", "you"];
for(i = 0; i<capitalizeArray.length;i++ )    

console.log(capitalizeArray[i][0].toUpperCase() +capitalizeArray[i].slice(1));
}
capitalizeWord();




// Q 5
// Calculate the sum of number recieved in comma string.

//variable to store sum of arrays
let sumOfArray1 = 0;
let str = "1.5, 2.5, 3.5, 2.8, 10, 12, 0.5, 6.0, 11, 12, 19, 20.0";
// 
let myArray = str.split(",");
// To compare index of array
var i =0;
// Loop for print string  
while (i < myArray[5]) {
    // To convert string to float number
    let x =parseFloat(myArray[i]);
    console.log(x)
    // To sum total value of x
    sumOfArray1 +=x
    console.log(sumOfArray1, typeof sumOfArray1)
    i++;    
}



