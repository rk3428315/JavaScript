addTwoStringNumber =() =>{
    // Declared two string variable
    let firstString = "10";
    let secondString = "40";

    // Convert string to number
    let firstNumber =parseInt(firstString);
    let secondNumber =parseInt(secondString);

    // Add two number 
    let sumOfTwoNumber = firstNumber + secondNumber;

    // Convert number to string
    sumOfTwoNumber =sumOfTwoNumber.toString();  

    console.log(sumOfTwoNumber, typeof sumOfTwoNumber);

}
// Call function of Add two string 
addTwoStringNumber();