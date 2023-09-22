function findLCM(number, number1){

    number = document.getElementById('number').value;
    number1 = document.getElementById('number1').value;
    let hcf = 0;
    let lcm = 0;

    for(let i =1; i <= number && i <= number1; i++){

        if(number % i == 0 && number1 % i == 0 ){
            hcf = i;
            console.log(hcf);
        }
    }
    lcm = (number * number1) / hcf;
    return document.getElementById('lcm').value = lcm;
    console.log(lcm);
}