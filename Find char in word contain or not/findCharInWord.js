// To find the Charechater in word
findTargetChar =(word,targetChar)=>{
    // split the word and store in n variable
    let n = word.split("");
    let isTrue=true ;
    // Loop to iterate till the n length
    for(i = 0; i < n.length; i++){
        // Condition to check target Char ture  or false
        if(targetChar == n[i]){
            isTrue=true
            //console.log(isTrue)

            //console.log(n[i])
        }  
        if(targetChar != n[i]){
            isTrue =false;
        }
    }   
    console.log(isTrue);    
}
findTargetChar("Ravi Kumar","a");