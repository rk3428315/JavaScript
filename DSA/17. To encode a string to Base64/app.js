
function encodeAndDecodeString(string) {
    // Encode the String
    var encodedString = btoa(string);
    console.log(encodedString); 
    
    // Decode the String
    var decodedString = atob(encodedString);
    console.log(decodedString); 

}
encodeAndDecodeString('Hello World');
