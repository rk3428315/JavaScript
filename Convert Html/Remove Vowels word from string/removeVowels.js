countVowelsWord =(str) =>{
    str = document.getElementById('value').value
    // Define th vowels variable to store vowels words
    let vowels = "aeiouAEIOU";
    let array = vowels.split("");
    //console.log(array);
    //console.log(array2);
    // To store the count of vowels words
    let count = "";

    let removedString= "";

    // To iterate the vowels till the length
    for(let i = 0; i < str.length; i++){

        //console.log(array[i]);
        // To iterate the str till the length
       
            //console.log(array2[j]);
            if(!array.includes(str[i])){
                removedString +=str[i]
            }
        
        //console.log(wordWithoutVowels);        
    }  
    return document.getElementById('result').value = removedString;
}
