// function to find the 4 + 4 randon number in string
function findTwoRandomNumber(min, max, stringLength){
    // store random number from 1000 to 9999
    let firstOne = Math.floor(Math.random() * (max - min)+ min);   

    // find 4 random string
    let result = '';
    let second = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let secondLength = second.length;
    for (let i = 0; i < stringLength; i++) {
        //console.log(second[i]);
        result += second.charAt(Math.floor(Math.random() * secondLength));        
    }    
    console.log(`${firstOne}${result}`);
}
findTwoRandomNumber(1000, 9999,4);