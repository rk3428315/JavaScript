

// Sum of Jagged array

// Variable to store jagged array value
let ar = [1, 2, [15, [23], [5, 12]], [100]];

// Function to return sum Of given jagged array
function sumJaggedArray(ar)
{
    // To store sum value element
    let sum = 0;
    // Loop to store vlaue of ar array one by one in el variable
    for(let el of ar)
    {
        // if el is array then iterate the value of el element by using recursivie function (sumJaggeArray(el)) and store in el 
        if (Array.isArray(el))
        {
            el =sumJaggedArray(el)
            //console.log(el);

        }    
        // sum one by one el elment  value in sum variable    
        sum += el;
    }
    console.log(sum);
    
    return sum;
}
sumJaggedArray(ar);
