// To find the sum odd fabonacci series
sumOddFabonicSeries =(n) =>{
    // Define the variable to campare value of n
    value = 0;
    // Define to store the latest value of value
    i =1;

    // To print fabonacci series till the n
    while (value <= n) {
        // To store sum of value and i variable
        let value1 =value+i;
        // To store value of value in i
        i = value;
        // To store value of value1 in value
        value = value1;
        // if value is greater than n then break the condition
        if(value > n){
            break;
        }
       
        console.log("Fabonacci series = ",value)                    
    }
    return value
}
sumOddFabonicSeries(20)