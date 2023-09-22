// Count the vowels number
countVowelsWord =(str) =>{
    str = document.getElementById('string').value;
    // Define th vowels variable to store vowels words
    let vowels = "aeiouAEIOU";
    // To store the count of vowels words
    let count = 0;
    // To iterate the vowels till the length
    for(let i = 0; i < vowels.length; i++){
        // To iterate the str till the length
        for(let j = 0; j < str.length; j++){
            // To check vowels and str element are equal or not 
            if(vowels[i] == str[j]){
                count++
            }
        }
    }
    return document.getElementById('p').innerHTML = count;       
}