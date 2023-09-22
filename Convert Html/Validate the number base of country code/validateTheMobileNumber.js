// Define the array of object
let array = [
    {"CountryCode" : "+91", "Number" : 10},
    {"CountryCode" : "+92", "Number" : 8},
    {"CountryCode" : "+1",  "Number" : 6},
    {"CountryCode" : "+01", "Number" : 5},
    {"CountryCode" : "+51", "Number" : 4}
];

// Find the correct number with the country code
function validateNumberWithCcode(countryCode,number) {
    countryCode = document.getElementById('countryCode').value;
    number = document.getElementById('number').value;
    // Iterate the array till the length
    for(let i = 0; i < array.length; i++){
        // To check if CountryCode is equal to countryCode then check the number
        if(array[i].CountryCode == countryCode){
            var temp = number.toString();
            // To check if Number is equal to number.length then return true otherwise false
            if(array[i].Number == temp.length){
                return document.getElementById('result1').innerHTML = true; 
            }
            //console.log(number);
        }
    }
    return document.getElementById('result1').innerHTML = false;
}
