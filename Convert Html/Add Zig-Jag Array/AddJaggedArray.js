

// Sum of Jagged array

// Variable to store jagged array value
// let ar = [1, 2, [15, [23], [5, 12]], [100]];

// Function to return sum Of given jagged array
function sumJaggedArray(ar)
{
    ar = document.getElementById('jaggedarr').value;
    // To store sum value element
    // if(el.includes(braces) || el.includes(braces1) || el.includes(comma)|| el.includes(spaces)){
    //     el1  = el;
    // }
    let array = ar.split(",");
    console.log(array);
    let sum = 0;
    var el1;
    // Loop to store vlaue of ar array one by one in el variable
    for(let el of ar)
    {
        var braces = "[";
        var braces1 = "]";
        var comma = ",";
        var spaces = " ";
        if(el.includes(braces) || el.includes(braces1) || el.includes(comma)|| el.includes(spaces)){
            el1  = el;
        }else{
            // if el is array then iterate the value of el element by using recursivie function (sumJaggeArray(el)) and store in el 
            if (Array.isArray(el)){
                
                el =sumJaggedArray(el)
                //console.log(el);

            }  
            let add = parseInt(el);  
            // sum one by one el elment  value in sum variable    
            sum += add;
        }
        //console.log(el)
        
    }
    console.log(sum);    
    return document.getElementById('arr').innerHTML = sum;
}