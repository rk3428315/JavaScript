// To print the star till the length of number
starPattern = (number) =>{
    // To store the number into string
    let numberLength = number.toString();
    // Iterate the i till the end of numberLength
    for(let i = 0; i < numberLength; i++){
        // Iterate the j till the end of i
        for(let j = 0; j <= i; j++){
            document.write("*");
        }
        document.write("<br>")
    }
}
starPattern(5);