// // find the smallest strinng in sentence
// sortTheSmallestString =(string) =>{
//     // convert string into array
//     let array = string.split(" ");
//     //console.log(array);
//     // Iterate tha array till the end of length
//     for(let i =0; i < array.length; i++){
//         //console.log(array[i]);
//         // To check array[i].length is smaller than array[i + 1 ].length
//         if(array[i].length < array[i + 1 ].length){
//             // swap value
//             var temp = array[i];
//             array[i]= array[i + 1];
//             array[i + 1] = temp;
//             //console.log(array[i].length)
//         }        
//         return array[i + 1];
//     };
    
// }
// console.log(sortTheSmallestString("This is the institute of software development."));

// find the smallest strinng in sentence
sortTheSmallestString =(string) =>{
    // convert string into array
    let array = string.split(" ");
    //console.log(array);
    // Iterate tha array till the end of length
    for(let i =0; i < array.length; i++){
        //console.log(array[i]);
        // To check array[i].length is smaller than array[i + 1 ].length
        for(let j = 0 + 1; j < array.length; j++){
            if(array[i].length > array[j].length){
                // swap value
                var temp = array[i];
                array[i]= array[j];
                array[j] = temp;
                //console.log(array[i])
            }
        }        
    };
    return array;
    
}
console.log(sortTheSmallestString("This is the institute of software development."));