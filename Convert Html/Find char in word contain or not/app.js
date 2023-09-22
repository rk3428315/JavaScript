// To find the Charechater in word
findTargetChar =(word,targetChar)=>{
    word = document.getElementById('word').value;
    targetChar = document.getElementById('targetChar').value;
    // split the word and store in n variable
    let n = word.split("");
    let isTrue = false;
    // Loop to iterate till the n length
    for(i = 0; i < n.length; i++){
        // Condition to check target Char ture  or false
        if(targetChar == n[i]){
            isTrue=true
            break;
            // document.getElementById('result').innerHTML = true;
            //console.log(isTrue)
        }

        if(targetChar != n[i]){
            isTrue =false;
            // document.getElementById('result').innerHTML = false;
        }
    }    
    return document.getElementById('result').innerHTML = isTrue;    
}