// Find the number which is divisible by x and y
divisibleNumber =(x,y,number) =>{
    
    // To check if number greater than 0 then return true and false
    if(number > 0){
        // To check number is divisible by x and y or not
        return (number % x == 0 && number % y == 0 ? true : false);
    }
    else{
        console.log("Number is less than 0.")
    }    
}
console.log(divisibleNumber(2,5,11));