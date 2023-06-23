// Find the max value in Jagged Array

// Find with first method

// Variable to store jagged array value
let ar = [34,5,[39,9387,[384,9948],29,34],6788];
// To store max value
let max = maxNumberInJaggedArray(ar);
console.log("max = ",max)

// Function to find max value from array
function maxNumberInJaggedArray(ar){
    let max = -Infinity;
    // Loop to print till the end of array length
    for(i = 0; i < ar.length; i++){
        let el = ar[i];
        console.log('el  ------- ', el, i)
        // To check if el is array or not
        if(Array.isArray(el)){
            //console.log("----is Array --------", el )
            el = maxNumberInJaggedArray(el);
            console.log(el);
                     
        }
        // To check if el is greater than max value or not
        if(el > max){
            max = el;
            //console.log(max)
        }
    }
    return max;

    console.log("Max Number in jagged Array = ",max);
}
maxNumberInJaggedArray(ar);



{
    let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

    let max = findMax(ar);
    console.log("Max  = ", max);

    // Use recursion to find the maximum numeric value in an array of arrays
    function findMax(ar)
    {
        let max = -Infinity;

        // Cycle through all the elements of the array
        for(let i = 0; i < ar.length; i++)
        {
            let el = ar[i];
            //console.log(el)

            // If an element is of type array then invoke the same function
            // to find out the maximum element of that subarray
            if ( Array.isArray(el))
            {
                el = findMax( el );
                console.log(el)
            }

            if ( el > max )
            {
                max = el;
            }
        }

        return max;
    }
}