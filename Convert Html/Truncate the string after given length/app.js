// Print the value till the lengthValue after the length value print ...
truncateString = (stringValue, lengthValue) => {

    stringValue = document.getElementById('stringValue').value;
    lengthValue = parseInt(document.getElementById('lengthValue').value);
    // Loop to iterate till the stringValue.length
    for (let i = 0; i < stringValue.length; i++) {
        if (stringValue[i] == " ") {
            let store = stringValue[i];
            console.log(store);
        } else {

            // To check the if lenght value is greater than i then print the value
            if (i < lengthValue) {
                
                console.log(stringValue[i]);
            }
            document.getElementById('result').innerHTML += stringValue[i];
            // To check the if lenght value is less than i and greater than 0 then print the ...
            if (i > lengthValue && i > 0) {
                document.getElementById('result').innerHTML += ".";
                console.log("...");
            }
            // To check the if 0 is greater than i then print nothing
            if (lengthValue <= 0) {
                document.getElementById('result').innerHTML = " ";
                console.log();
            }
        }
    }
}