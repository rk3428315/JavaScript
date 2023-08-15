
// Find the factor of number
factorNumber =(n) =>{
    // Loop to iterate till the 10 digit
    for(let i =1; i < 10; i++){
        // Condition to check n is divide with i and modules is 0 then print numbers
        if(n % i == 0){
            console.log("Factor of number = ",i);
        }
           
    }    
}
factorNumber(12);

