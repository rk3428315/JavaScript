// function to find the 4 + 4 randon number in string
function findTwoRandomNumber(min, max){
    // store random number from 1000 to 9999
    let firstOne = Math.floor(Math.random() * (max - min)+ min); 
    document.getElementById('firstRandom').value = firstOne;

    // find 4 random string
    let result = '';
    let second = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let secondLength = second.length;
    for (let i = 0; i < 4; i++) {
        //console.log(second[i]);
        result += second.charAt(Math.floor(Math.random() * secondLength)); 
        document.getElementById('secondRandom').value = result;       
    }    
    document.getElementById('result').value = `${firstOne}${result}`;
    console.log(`${firstOne}${result}`);
}
findTwoRandomNumber(1000, 9999);