rot13=(arr)=>{
    // Define array from a to z
    let array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // Define the variable to store the sum and substraction of i and 13
    let sum =0;
    // Loop to iterate the value of array till the length
    for(i =0; i < array.length; i++){
        //console.log(array[i]);
        // To check if i will be less than and qual to 12
        if(i <= 12){
            // To check arr qual to array element or not
            if(arr == array[i]){
                // temparory variable to store the value of array element
                var store =array[i];
                // Store the sum of i + 13
                sum = i + 13;        
                // To store the value of sum value in array[i]
                array[i]= array[sum]; // array[i] = n
                console.log(array[i]);                
            }     
            
        }
        // To check if i will be greater than  12
        if(i > 12){
            // To check arr qual to array element or not
            if(arr == array[i]){
                 // temparory variable to store the value of array element
                var store =array[i];
                // Store the substraction of i - 13
                sum = i - 13;       
                // To store the value of sum value in array[i]
                array[i]= array[sum];
                console.log(array[i]);
                // To check if sum  qual to 25 then break the condition
                if(sum == 25){
                    break;
                }
            }
        }
    }
}
console.log(rot13("a"));

