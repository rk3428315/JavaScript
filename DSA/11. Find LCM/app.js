function findLCM(number, number1){

    let hcf = 0;
    let lcm = 0;
    let firstNumber = 0;
    let secomdNumberNumber = 0;
    let thirdNumber = 0;

    for(let i =1; i <= number && i <= number1; i++){

        if(number % i == 0 && number1 % i == 0 ){
            hcf = i;
            console.log(hcf);
        }
    }
    lcm = (number * number1) / hcf;
    console.log(lcm);
}
findLCM(100,512);