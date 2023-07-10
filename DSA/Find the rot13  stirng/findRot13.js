
// To change the dynamic number 
dynamicChange = (change) =>{
    //console.log(change)
    return change;
}
dynamicChange(5);

// To find the Caesar Cipher
rot13=(arr)=>{
    var str ="";
    // Define array from a to z
    let array = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Define the variable to store the sum and substraction of i and 13
    let sum = 0;

     // To iterate the till the length of arr
    for(j = 0; j<arr.length; j++){
        // if(arr[j]== " "){
        //     sum = i + " ";
        //     str += array[sum]; 
        // }
        // Loop to iterate the value of array till the length
        for(i =0; i < array.length; i++){
            
           
           
        
            //console.log(array2[j]);
            // To check if i will be less than and qual to 12                      
            if(i <= 12){

                // To check arr qual to array element or not
                if(arr[j] == array[i]){

                    // Store the sum of i + dynamic change of number
                    sum = i + dynamicChange(13);
                    str += array[sum]; 
                }
            }

            // // To check if i will be greater than 12
            else{

                // To check arr qual to array element or not
                if(arr[j] == array[i]){

                    // Store the sum of i - dynamic change of number
                    sum = i - dynamicChange(13);  
                    str += array[sum];
                }
            }
            
        }
    }
    return str;
}

console.log(rot13("serr pbqr pnzc"));