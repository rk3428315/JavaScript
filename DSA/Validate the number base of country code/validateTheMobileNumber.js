// Define the array of object
let array = [
    {"CountryCode" : "+91","Number" : 10},
    {"CountryCode" : "+92","Number" : 8},
    {"CountryCode" : "+1","Number" : 6},
    {"CountryCode" : "+01","Number" : 5},
    {"CountryCode" : "+51","Number" : 4}
];

// Find the correct number with the country code
function validateNumberWithCcode(countryCode,number) {
    // To check if length is correct on the base of country code then return true otherwise false 
    if(countryCode == +91){
        // Convert number into string
        let temp =  number.toString();
        // To check if temp length is 10 then print true
        if(temp.length == 10){
            return true;
       }
       return false;
    }
    // To check if length is correct on the base of country code then return true otherwise false 
    if(countryCode == +92){
        // Convert number into string
        let temp =  number.toString();
        // To check if temp length is 10 then print true
        if(temp.length == 8){
            return true;
       }
       return false;
    }
    // To check if length is correct on the base of country code then return true otherwise false 
    if(countryCode == +1){
        // Convert number into string
        let temp =  number.toString();
        // To check if temp length is 10 then print true
        if(temp.length == 6){
            return true;
       }
       return false;
    }
    // To check if length is correct on the base of country code then return true otherwise false 
    if(countryCode == +01){
        // Convert number into string
        let temp =  number.toString();
        // To check if temp length is 10 then print true
        if(temp.length == 5){
            return true;
       }
       return false;
    }
    // To check if length is correct on the base of country code then return true otherwise false 
    if(countryCode == +51){
        // Convert number into string
        let temp =  number.toString();
        // To check if temp length is 10 then print true
        if(temp.length == 4){
            return true;
       }
       return false;
    }    
}
console.log(validateNumberWithCcode(+51,1237))