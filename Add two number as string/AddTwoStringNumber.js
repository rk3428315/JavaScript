addTwoStringNumber =(firstString,secondString) =>{

    // Convert string to number
    let firstNumber =parseInt(firstString);
    let secondNumber =parseInt(secondString);

    // Condition to check if number can't negative if negative it can't add the number.
    if(firstNumber >= 0 && secondNumber >= 0){
        // Add two number 
        let sumOfTwoNumber = firstNumber + secondNumber;

        // Convert number to string
        sumOfTwoNumber =sumOfTwoNumber.toString();  
        console.log(sumOfTwoNumber, typeof sumOfTwoNumber);

    }  
    else{
        console.log("Negative number can't add .")
    }
    
}
// Call function of Add two string 
addTwoStringNumber("7987","4863");