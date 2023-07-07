// To find thee Palindromic string
palindromicString = (str) => {
    // Variable to store the length of str
    let j = str.length -1;
    // Loop to iterate the till the end of half length of j like if j = 5 then it will run 2 times only
    for(let i = 0; i < j / 2; i++){
        // sotre value of i element in x
       let x = str[i];
        // sotre value of (j-i) element in x       
       let y  = str[j - i];
       // To check if x is not equal to y then return false otherwise true
       if(x != y){
        return false;
       }
    }
    return true;       
}
console.log(palindromicString("aspsa"));

