// Find the factorial number of n
factorialNumber =(n) =>{
    let factorial = 1;
    // Loop to iterate till n
    for(let i = 0; i <= n; i++){
        // Multiplication of factorial and i number one by one 
        factorial *= i;
        console.log("Factorial of number = ",factorial);
    }
    return factorial  
}
factorialNumber(5);