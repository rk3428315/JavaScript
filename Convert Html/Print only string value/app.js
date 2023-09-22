
// Function to check input value in string or not
function checkStringOrNot(char){
    
    // To return only a to z character string
    return /[a-z A-Z ]/.test(char);
}

// Function to find only string value
printStringValuOnly = (sstring) =>{
    let strore1 = "";
    // Variable to store array value
    let store = "";
    
    sstring = document.getElementById('sstring').value;

    // To string split in array using 
    let splited = sstring.split(" ");

    // Loop to print till the splited length
    for(i =0; i < splited.length; i++){

        // Condition to check if splited element is string then true otherwise false
        if(checkStringOrNot(splited[i]) == true){

            // If splited element is true (string value) then push the value in store array
            store += splited[i]+" ";
            // store1 +=store;
            console.log("Store Only String Value = ",store);
        }
        
    } 
    return document.getElementById('store').innerHTML = `Only String value: ${store}`;
}