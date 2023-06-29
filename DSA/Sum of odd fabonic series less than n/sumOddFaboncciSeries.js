// To find the sum odd fabonacci series
sumOddFabonicSeries =(n) =>{
    // Define the variable to campare value of n
    value = 0;
    // Define to store the latest value of value
    i =1;
    // Define to store the sum of fabonacci series
    let sum = 0;

    // To print fabonacci series till the n
    while (value < n) {
          
        // To store sum of value and i variable
        let value1 =value+i;
        // To store value of value in i
        i = value;
        // To store value of value1 in value
        value =value1
        // conditon to check if value is greater than n then break
        if(value > n){
            break;
        }  
        // To check odd fabonacci series
        if(value % 2 != 0){
            console.log(value)
            // To sum the value of odd fabonacci series   
            sum +=value
        } 
         
    }
    console.log("Sum of odd fabonacci series = ",sum)                    
    return sum;
}
sumOddFabonicSeries(20);
