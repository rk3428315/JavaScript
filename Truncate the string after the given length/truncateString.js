// Print the value till the lengthValue after the length value print ...
truncateString = (stringValue, lengthValue) =>{
    // Loop to iterate till the stringValue.length
    for(let i = 0; i < stringValue.length; i++){
        // To check the if lenght value is greater than i then print the value
        if(i < lengthValue){
            console.log(stringValue[i]);
        }
        // To check the if lenght value is less than i and greater than 0 then print the ...
        if(i > lengthValue && i < 0){
            console.log("...");
        }
        // To check the if 0 is greater than i then print nothing
        if(lengthValue  < 0){            
            console.log();
        }
    }
}
truncateString("Avinash Kumar", -2);