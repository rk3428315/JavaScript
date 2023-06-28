// Variable to store string
let sstring = "This is ANAND    Ji $ !,, 22";

// To string split in array using ,
let splited = sstring.split(" ")

// Variable to store array value
let store = [];

// Function to check input value in string or not
function checkStringOrNot(char){

    // To return only a to z character string
    return /[a-z A-Z 0-9]/.test(char);
}

// Function to find only string value
printStringValuOnly = (sstring) =>{

    // Loop to print till the splited length
    for(i =0; i<splited.length; i++){

        // Condition to check if splited element is string then true otherwise false
        if(checkStringOrNot(splited[i])== true){

            // If splited element is true (string value) then push the value in store array
            store.push(splited[i]);

            console.log("Store Only String Value = ",store);
        }
    } 
}
// To Call function
printStringValuOnly(sstring);
