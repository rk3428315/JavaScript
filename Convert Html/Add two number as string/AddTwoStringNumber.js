addTwoStringNumber =(firstString,secondString) =>{

    firstNumber = parseInt(document.getElementById('firstNumber').value);
    secondNumber = parseInt(document.getElementById('secondNumber').value);

    // Condition to check if number can't negative if negative it can't add the number.
    if(firstNumber >= 0 && secondNumber >= 0){
        // Add two number 
        let sumOfTwoNumber = firstNumber + secondNumber;
        document.getElementById('sum').innerHTML = "Sum of string :"+sumOfTwoNumber; 

        // Convert number to string
        sumOfTwoNumber =sumOfTwoNumber.toString();
        console.log(sumOfTwoNumber, typeof sumOfTwoNumber);

    }  
    else{
        document.getElementById('sum').innerHTML = "Negative number or string can't add .";
        console.log("Negative number can't add .")
    }
    
}