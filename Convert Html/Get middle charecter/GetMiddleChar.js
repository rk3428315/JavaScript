// Find the middle word of even and odd string length
function getMiddlWord(value) {
    value = document.getElementById('value').value;
    // To check value length is even or not
    if(value.length % 2 ==0){
        // To find the middle word of value
        let middleChar = value.length / 2;
        // To iterate till the length of middleChar
        for(let i =0; i <= middleChar; i++){

            document.getElementById('result').value = `${value[middleChar -1]}${value[middleChar]}`;
            console.log(`This is middle word of even =  ${value[middleChar -1]}${value[middleChar]}`);
            return value;
            
        }   
    }
    // To check value length is odd or not
    if(value.length % 2 != 0){
        // To find the middle word of value
        let middleChar = Math.floor(value.length / 2);
        // To iterate till the length of middleChar
        for(let i =0; i <= middleChar; i++){

            document.getElementById('result1').value = value[middleChar];
            console.log("This is middle word of odd = " + value[middleChar]);
            return value;
        
        }
    }
}