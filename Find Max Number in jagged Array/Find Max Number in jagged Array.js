// Find the max value in Jagged Array

// Find with first method

// Variable to store jagged array value
let ar = [34,5,[39, 387,[384,948],29,34],6788];
// To store max value
let max = 0;
// Function to find max value from array
function maxNumberInJaggedArray(ar){
    // Loop to print till the end of array length
    for(i = 0; i < ar.length; i++){
        let el = ar[i];
        // To check if el is array or not
        if(Array.isArray(el)){
            el = maxNumberInJaggedArray(el);            
        }
        // To check if el is greater than max value or not
        if(el > max){
            max = el;
        }
    }
    console.log("Max Number in jagged Array = ",max)
}
maxNumberInJaggedArray(ar);


// Find with second method
{
    // Variable to store jagged array value
    let ar1 = [34,5,[39,387[384,948],29,34],6788];
    let store1 = [];
    let max1 = 0;

    function maxNumberInJaggedArray1(ar1){
        // Loop to store vlaue of ar array one by one in el variable
        for(let el1 of ar1) {
            // console.log(el);
            // If el is array then iterate the value of el element by using recursivie function (sumJaggeArray(el)) and store in el 
            if (Array.isArray(el1)){
               
                el1 = maxNumberInJaggedArray1(el1);
            }
            // push el1 element in store1
            store1.push(el1)
            console.log(store1);

            for (var ind = 1; ind < store1.length; ind++) {                 // To print index value of array from 1 index  to length of array and increase one by one by indexing
                for (var x = 0; x < ind; x++) {                             // To print x index value of array from 0 index to length of array and  check if x value is less than array index value
        
                    if (store1[x] > store1[ind]) {                           // if x index value is greater than array index value 
                        var store2 = store1[ind];                            // store value of array index value in store variable
                        store1[ind] = store1[x];                            // store x index value in array index value
                        store1[x] = store2;                                  // store x index value in store variable
                    }
                    // To store last max value in max variable
                    let max = store1.pop();
                    console.log("Store Max value = ",max)
                }
            }
        }
    }    
    maxNumberInJaggedArray1(ar1);
}